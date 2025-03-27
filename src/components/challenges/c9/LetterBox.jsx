export default function LetterBoxes(props){
    return(
        <>
            <div className="inline-block bg-zinc-700 w-12 h-10 text-center py-2 border-b-1 border-white text-white uppercase font-semibold">
                <span>{props.letter}</span>
            </div>
        </>
    )
}