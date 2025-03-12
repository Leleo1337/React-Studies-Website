export default function GenerateRecipe(props){
    return(
        <>
            <div className='mt-10 p-4 bg-c5recipeSectionBg rounded-md sm:flex sm:justify-center sm:items-center lg:justify-center gap-16 lg:w-140'>
                <div>
                    <h2 className='font-semibold text-md'>Ready for a recipe ?</h2>
                    <p className='pt-0.5 text-sm text-gray-600'>generate a recipe from your list of ingredients</p>
                </div>
                <button onClick={props.toggleRecipe} className='px-5 mt-4 py-2 bg-c5Button hover:bg-c5Button/90 active:bg-c5Button/100 text-white text-sm rounded shadow cursor-pointer'>Get a recipe</button>
            </div>
        </>
    )
}