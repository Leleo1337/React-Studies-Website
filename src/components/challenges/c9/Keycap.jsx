export default function KeyCap(props){
    return(
        <>
            <button onClick={props.guess} className={`inline-block ${props.status} font-semibold px-4 py-2 outline-1 outline-white rounded-sm cursor-pointer uppercase`} >
                {props.letter}
            </button>
        </>
    )
}