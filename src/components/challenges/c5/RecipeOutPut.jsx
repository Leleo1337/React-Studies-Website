export default function RecipeOutPut(){
    return(
        <>
            <h1 className='text-xl font-semibold lg:text-center'>Suggested recipe</h1>
            <p className='pt-2 text-gray-600 text-sm lg:text-center'>Based on your avaliable ingredients, I would recommend making a <span>{}</span>. Here's the recipe:</p>
            <div className='lg:grid grid-cols-2 lg:py-8 lg:w-full justify-ce'>
                <div className='py-12 lg:py-0'>
                    <h3 className='font-semibold text-sm text-gray-600 pb-3 lg:pb-6 lg:text-center'>Ingredients</h3>
                    <ul className='flex flex-col gap-2 list-disc pl-6 text-gray-500 text-sm'>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-semibold text-sm text-gray-600 pb-3 lg:pb-6 lg:text-center'>Instructions</h3>
                    <ol className='flex flex-col gap-2 list-decimal pl-6 text-gray-500 text-sm'>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                        <li>teste</li>
                    </ol>
                </div>
                <p className='text-gray-600 px-2 pt-12 text-sm lg:text-xl lg:font-bold'>Enjoy!</p>
            </div>
        </>
    )
}