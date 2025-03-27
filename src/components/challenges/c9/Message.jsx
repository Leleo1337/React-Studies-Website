import { getFarewellText } from "../../../data/challenge_9/options.js";


export default function Message(props){
    const farewellText = getFarewellText(props.lang)
    return(
        <>
            <div style={{
                    backgroundColor: props.color,
                    outline: `2px dashed ${props.color}`
                }} 
                className='flex justify-center items-center w-full h-20 p-4 text-center text-white text-md md:text-xl md:h-25'
            >
                <p>{farewellText}</p>
            </div>
        </>
    )
}