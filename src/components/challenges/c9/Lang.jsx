export default function Lang(props){
    return(
        <div className={`${props.isLost && 'lost'} relative px-1.5 rounded-sm text-center text-white font-inter font-semibold py-1 bg-orange-500" `}
            style={{backgroundColor: props.background, color: props.color}}>
            {props.name}
        </div> 
    )
}