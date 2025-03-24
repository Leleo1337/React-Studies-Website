export default function Die({value, toggleGreen, isChecked}){
    return(
        <>
            <div onClick={toggleGreen} className={`flex items-center justify-center w-[80%] h-[75%] rounded-md drop-shadow-lg cursor-pointer hover:scale-102 transition-colors ease-out duration-200 font-inter text-xl font-bold active:scale-105
                ${isChecked? 'bg-diceGreen': 'bg-white'} `}>
                <span className="text-black">{value}</span>
            </div>
        </>
    )
}