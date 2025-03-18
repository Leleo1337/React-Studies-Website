import { useState } from 'react'


export default function Joke(props){
    const [ isShown, setIsShown ] = useState(false)

    function displayPunchLine(){
        setIsShown(prevState => !prevState)
    }

    return (
        <>  
            <div className="pb-4 text-lg">
                {props.setup && <p className="font-semibold">{props.setup}</p>}
                {isShown && <p className="ml-4">{props.punchline}</p> }
                <button onClick={displayPunchLine} className="my-2 bg-gray-200 rounded-sm cursor-pointer px-2 hover:bg-gray-300 hover:text-white">show punchline</button>
                <hr />
            </div>
        </>
    )
}