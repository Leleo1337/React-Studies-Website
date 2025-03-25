export default function KeyCap(props){
    return(
        <>
            <div className="inline-block bg-yellow-500 font-semibold px-4 py-2 outline-1 outline-white rounded-sm cursor-pointer uppercase" >{props.letter}</div>
        </>
    )
}