import { use, useState } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'


import RecipeOutPut from '../../components/challenges/c5/RecipeOutPut'
import ContainerHeader from '../../components/challenges/c5/ContainerHeader'


export default function ChallengeFive(){
    document.body.classList.remove('bg-zinc-950')
    document.body.classList.add('bg-c5Background')

    const [ingredients, setIngredient] = useState([])
    const [ recipeShown, setRecipeShown ] = useState(false)

    const ingredientListItems = ingredients.map(ingredient =>{
        return <li key={ingredient}>{ingredient}</li>
    })

    function addIngredient(formData){
        const newIngredient = formData.get('ingredient')
        if(newIngredient == '' || !isNaN(newIngredient)){
            alert('[ERRO] Insira ingredientes validos')
            return
        }
        setIngredient(prevState => [...prevState, newIngredient ])
    }

    
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
                                />
                                <button className='bg-c5IngButton w-2/3 sm:w-1/2 py-1 sm:py-2 text-white rounded-md text-sm cursor-pointer hover:bg-c5IngButton/90 active:bg-c5IngButton/100'>+ Add ingredient</button>
                            </form>
                            {
                            ingredients.length == 0 &&
                                <p className='py-4 text-sm text-gray-400 font-semibold'>You must add at least 4 ingredients to get a recipe</p>
                            }

                            {
                            ingredients.length > 0 &&
                                <div className='pt-8'>
                                    <h1 className='pb-4 font-semibold text-xl sm:text-2xl'>Ingredients on hand:</h1>
                                    <ul className='flex flex-col gap-2 list-disc pl-6 text-gray-500'>
                                        {ingredientListItems}
                                    </ul>
                                    {
                                    ingredients.length > 3 && 
                                        <div className='mt-10 p-4 bg-c5recipeSectionBg rounded-md sm:flex sm:justify-center sm:items-center lg:justify-center gap-16 lg:w-140'>
                                            <div>
                                                <h2 className='font-semibold text-md'>Ready for a recipe ?</h2>
                                                <p className='pt-0.5 text-sm text-gray-600'>generate a recipe from your list of ingredients</p>
                                            </div>
                                            <button onClick={() => setRecipeShown(true)} className='px-5 mt-4 py-2 bg-c5Button hover:bg-c5Button/90 active:bg-c5Button/100 text-white text-sm rounded shadow cursor-pointer'>Get a recipe</button>
                                        </div>
                                    }  
                                </div>
                            }
                        </section>
                        {recipeShown? 
                            <section className='py-4 px-2 shadow-sm'>
                                <RecipeOutPut />
                            </section>
                        : null
                        }
                    </main>
                </div>
            <Footer />
        </>
    )
}