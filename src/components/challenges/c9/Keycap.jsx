export default function KeyCap(props){

    function colors(){
        if(props.status == 'correct'){
            return 'oklch(0.792 0.209 151.711)'
        }else if(props.status == 'incorrect'){
            return 'oklch(0.637 0.237 25.331)'
        }
    }

    function clickFunctions() {
        if (props.click) props.click()
        if (props.increaseAttempts) props.increaseAttempts()
    }

    return(
        <>
            <div onClick={clickFunctions} style={{background: colors()}} className="inline-block bg-yellow-500 font-semibold px-4 py-2 outline-1 outline-white rounded-sm cursor-pointer uppercase" >
                {props.letter}
            </div>
        </>
    )
}