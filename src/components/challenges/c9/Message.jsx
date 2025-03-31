import { getFarewellText } from "../../../data/challenge_9/options.js";


export default function Message(props){
    const farewellText = getFarewellText(props.deadLang)

    const styles = {
        backgroundColor: props.gameWon && '#10A95B' || props.gameLost && '#BA2A2A' || props.color,
        outline: `2px dashed ${props.gameWon && '#10A95B' || props.gameLost && '#BA2A2A' || props.color}`
    }
    return(
        <>
            <div style={styles} className='flex justify-center items-center w-full p-4 text-center text-white text-md md:text-xl md:h-25'>   
                <div className="flex flex-col gap-2 justify-center items-center">
                    <h1 className="text-2xl font-semibold">{props.title}</h1>
                    <p className="text-lg">{props.message || farewellText}</p>
                </div>
            </div>
        </>
    )
}