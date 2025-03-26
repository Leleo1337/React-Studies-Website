import tinycolor from "tinycolor2"

export default function Lang(props){
    const darker = tinycolor(props.bgColor).darken(40).toString()

    return(
        props.status == 'dead'? (
            <div className="relative inline-block px-1.5 rounded-sm text-center opacity-90 text-white font-inter font-semibold py-1 bg-orange-500" 
                style={{background: darker, color: props.textColor}}>
                <span className="text-gray-600">{props.lang}</span>
                <span className="absolute left-1/2 -translate-x-1/2 top-1">💀</span>
            </div> )
        : ( <div className="inline-block px-1.5 rounded-sm text-center text-white font-inter font-semibold py-1 bg-orange-500" 
            style={{background: props.bgColor, color: props.textColor}}>
            {props.lang}
        </div> )
        
    )
}