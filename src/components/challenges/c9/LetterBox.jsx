export default function LetterBoxes({letter}){
    return(
        <>
            <div className="inline-block bg-zinc-700 px-4 py-2 border-b-1 border-white text-white uppercase font-semibold">
                <span className="opacity-0">{letter}</span>
            </div>
        </>
    )
}