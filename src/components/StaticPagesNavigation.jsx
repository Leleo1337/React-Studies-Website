import { Link } from 'react-router-dom'; // Adicione esta importação
import { useState } from 'react';

import cardShadow from '../assets/card-shadow.png'

export default function StaticPageCards(props){
    const [ isHovered, setIsHovered ] = useState(false)

    return(
            <div className='w-full pb-8 text-3xl font-semibold text-center text-white'>
                <h3 className='pb-2.5 text-2xl'>{props.title}</h3>
            <Link to={props.path} className='mx-auto shadow card-style' 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} >
                <img src={isHovered ? props.hoverImg : props.img } alt="Challenge preview" className='w-full rounded-xl opacity-40 hover:opacity-60'/> 
                <span className="absolute text-lg font-semibold hover:underline bottom-4 left-5 text-gray-50 z-1">
                    {props.name}
                </span>
                <img src={cardShadow} alt="image shadow" className="absolute bottom-0 left-0 z-0 h-20 rounded-b-xl" />
            </Link>
            </div>
    )
}
