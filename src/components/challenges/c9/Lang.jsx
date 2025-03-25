export default function(props){
    return(
        <div className="inline-block px-1.5 rounded-sm text-center text-white font-inter font-semibold py-1 bg-orange-500" style={{background: props.bgColor, color: props.textColor}}>{props.lang}</div>
    )
}