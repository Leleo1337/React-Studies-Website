import RecipeCard from '../../../components/challenges/c5/RecipeCard'


export default function IngredientList(props){
    return(
        <>
            <div className='pt-8'>
                <h1 className='pb-4 font-semibold text-xl sm:text-2xl'>Ingredients on hand:</h1>
                <ul className='flex flex-col gap-2 list-disc pl-6 text-gray-500'>
                    {props.listItems}
                </ul>
                {
                props.listItems.length > 3 && 
                    <RecipeCard ref={props.ref} spin={props.spin} getRecipe={props.getRecipe}/>
                } 
            </div>
        </>
    )
}