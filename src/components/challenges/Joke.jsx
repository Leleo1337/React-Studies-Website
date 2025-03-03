export default function Joke(props){
    return (
        <>  
            <div className="pb-4 text-lg">
                {props.setup && <p className="font-semibold">{props.setup}</p>}
                <p className="ml-4">{props.punchline}</p>
                <hr />
            </div>
        </>
    )
}