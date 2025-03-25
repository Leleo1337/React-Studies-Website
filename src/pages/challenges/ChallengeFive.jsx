import { useState, useRef, useEffect } from 'react'

import getRecipeFromMistral from '../../ai/ai.js'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContainerHeader from '../../components/challenges/c5/ContainerHeader'
import ClaudeRecipe from '../../components/challenges/c5/ClaudeRecipe'
import IngredientList from '../../components/challenges/c5/IngredientList'


export default function ChallengeFive(){
    const [ ingredients, setIngredient] = useState([])
    const [ recipe, setRecipe ] = useState("")
    const [ loading, setLoading ] = useState(false)
    const recipeSection = useRef(null)
    const ingredientListItems = ingredients.map(ingredient =>{
        return <li key={ingredient}>{ingredient}</li>
    })

    function addIngredient(formData){
        const newIngredient = formData.get('ingredient')
        if(newIngredient == '' || !isNaN(newIngredient)){
            alert('[ERRO] Insira ingredientes validos')
            return
        }
        if(ingredients.includes(newIngredient)){
            alert('[ERRO] ingrediente já adicionado')
            return
        } 
        setIngredient(prevState => [...prevState, newIngredient ])
    }
    async function getRecipe(ingredientList){
        setLoading(true)
        const recipeResponse = await getRecipeFromMistral(ingredientList)
        if(recipeResponse){
            setRecipe(recipeResponse)
            setLoading(false)
        }
    }

    useEffect(() => {
        document.body.classList.add('bg-c5Background');

        return () => {
            document.body.classList.remove('bg-c5Background');
        };
    }, []);

    useEffect(() =>{
        if (recipe !== "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({ behavior: 'smooth'});
        }
    },[recipe])
    
    return(
        <>
            <Header />
                <div className='container md:w-[1024px] mx-auto mt-8 mb-40 bg-white font-inter rounded-md'>
                    <header className='flex items-center justify-center gap-4 h-20 shadow-sm relative'>
                        <ContainerHeader/>
                    </header>
                    <main className='bg-c5Main px-2 shadow-md rounded-b-md sm:px-12 pb-12'>
                        <section className='px-2 py-8'>
                            <form action={addIngredient} className='flex flex-col gap-2.5 justify-center items-center sm:flex-row'>
                                <input 
                                    type="text" 
                                    placeholder='e.g oregano' 
                                    aria-label="add ingredient"
                                    name="ingredient"
                                    className='border w-full py-1 sm:py-2 border-gray-300 rounded-sm text-sm text-center shadow-xs'
                                    autoComplete='off'
                                />
                                <button className='bg-c5IngButton w-2/3 sm:w-1/2 py-1 sm:py-2 text-white rounded-md text-sm cursor-pointer hover:bg-c5IngButton/90 active:bg-c5IngButton/100'>+ Add ingredient</button>
                            </form>
                            { ingredients.length == 0 && <p className='py-4 text-sm text-gray-400 font-semibold'>You must add at least 4 ingredients to get a recipe</p> }
                            
                            {ingredients.length > 0 && <IngredientList ref={recipeSection} listItems={ingredientListItems} spin={loading} getRecipe={() => getRecipe(ingredients)} />}

                        </section>
                        {recipe && <ClaudeRecipe recipeIdea={recipe} />}
                    </main>
                </div>
            <Footer />
        </>
    )
}