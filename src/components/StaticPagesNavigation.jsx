import { Link } from 'react-router-dom'; // Adicione esta importação
import { useState } from 'react';

import cardShadow from '../assets/img/card-shadow.png'

export default function StaticPageCards(props){
    const [ isHovered, setIsHovered ] = useState(false)

    return(
            <div className='w-full text-white text-center text-3xl font-semibold pb-8'>
                <h3 className='pb-2.5 text-2xl'>{props.title}</h3>
            <Link to="c1" className='card-style mx-auto shadow' 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} >
                <img src={isHovered ? props.hoverImg : props.img } alt="Challenge preview" className='w-full rounded-xl opacity-40 hover:opacity-60'/> 
                <span className="hover:underline absolute bottom-4 left-5 text-gray-50 text-lg font-semibold z-1">
                    {props.name}
                </span>
                <img src={cardShadow} alt="image shadow" className="absolute bottom-0 left-0 h-20 z-0 rounded-b-xl" />
            </Link>
            </div>
    )
}
