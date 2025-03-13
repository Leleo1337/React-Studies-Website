
export default function Pad(props){
    return(
        <button className='flex items-center justify-center text-white font-semibold w-[100%] h-36 border-3 border-white cursor-pointer rounded-xl'
            key={props.id} 
            onClick={()=> props.toggle(props.id)}
            style={{
                backgroundColor: props.color,
                opacity: props.isOn ? 1 : 0.1,
            }} 
        >
            Click me
        </button>
    )
}