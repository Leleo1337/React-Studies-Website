export default function Die({value, toggleClick, isChecked}){
    return(
        <>
            <div onClick={toggleClick} className={`flex items-center justify-center ${isChecked? 'bg-green-400': 'bg-white'} w-[80%] h-[75%] rounded-md drop-shadow-lg cursor-pointer hover:bg-green-100 transition-all ease-in duration-100 font-inter text-xl font-bold`}>
                <span className="text-black">{value}</span>
            </div>
        </>
    )
}