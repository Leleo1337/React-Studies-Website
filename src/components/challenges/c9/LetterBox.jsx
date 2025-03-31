export default function LetterBoxes(props){
    return(
        <>
            <div className={`${props.revealStyles || 'text-white'} inline-block bg-zinc-800 w-12 h-11 text-center py-2 border-b-1 border-white  uppercase font-semibold`}>
                <span>{props.letter}</span>
            </div>
        </>
    )
}