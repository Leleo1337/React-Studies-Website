export default function Button(func){
    return (
        <>
            <button onClick={func.click} 
                className='w-full py-2 px-6 mt-4  bg-purple-800 text-white active:bg-purple-900 rounded-md cursor-pointer'>
                Get a new meme image  🖼
            </button>
        </>
    )
}