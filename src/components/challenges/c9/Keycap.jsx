export default function KeyCap(props){
    return(
        <>
            <button 
                className={`inline-block ${props.status} font-semibold px-4 py-2 outline-1 outline-white rounded-sm cursor-pointer uppercase`}
                disabled={props.disabled} 
                onClick={props.guess} 
            >
                {props.letter}
            </button>
        </>
    )
}