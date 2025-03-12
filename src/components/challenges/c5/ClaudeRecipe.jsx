export default function RecipeOutPut(){
    return(
        <>
            <section className='py-4 px-2 shadow-sm'>
                <h1 className='text-xl font-semibold lg:text-center'>Suggested recipe</h1>
                <p className='pt-2 text-gray-600 text-sm lg:text-center'>Based on your avaliable ingredients, I would recommend making a <span>{}</span>. Here's the recipe:</p>
                <div className='lg:grid grid-cols-2 lg:py-8 lg:w-full'>
                    <div className='py-12 lg:py-0'>
                        <h3 className='font-semibold text-sm text-gray-600 pb-3 lg:pb-6 lg:text-center'>Ingredients</h3>
                        <ul className='flex flex-col gap-2 list-disc pl-6 text-gray-500 text-sm'>
                            <li>1 lb. ground beef</li>
                            <li>1 onion, diced</li>
                            <li>3 cloves garlic, minced</li>
                            <li>2 tablespoons tomato paste</li>
                            <li>1 (28 oz) can crushed tomatoes</li>
                            <li>1 cup beef broth</li>
                            <li>1 teaspoon dried oregano</li>
                            <li>1 teaspoon dried basil</li>
                            <li>Salt and pepper to taste</li>
                            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-sm text-gray-600 pb-3 lg:pb-6 lg:text-center'>Instructions</h3>
                        <ol className='flex flex-col gap-2 list-decimal pl-6 text-gray-500 text-sm'>
                            <li>Bring a large pot of salted water to a boil for the pasta.</li>
                            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                            <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                            <li>Stir in the tomato paste and cook for 1 minute.</li>
                            <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                            <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                            <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                            <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                            <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
                        </ol>
                    </div>
                    <p className='text-gray-600 px-2 pt-12 text-sm lg:text-xl lg:font-bold'>Enjoy!</p>
                </div>
            </section>
        </>
    )
}
