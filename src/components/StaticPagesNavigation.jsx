import { Link } from 'react-router-dom'; // navegação SPA
import { useState } from 'react';

import cardShadow from '../assets/card-shadow.png'

export default function StaticPageCards(props){
    const [ isHovered, setIsHovered ] = useState(false)

    return(
            <div className='pb-8 text-3xl font-semibold text-center text-white sm:w-full'>
                <h3 className='pb-2.5 text-2xl'>{props.title}</h3>
            <Link to={props.path} className='mx-auto shadow h-50 sm:h-80 opacity-55 hover:opacity-80 card-style' style={{ backgroundImage: `url(${isHovered ? props.hoverImg : props.img})` }}
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
            >
                <span className="absolute text-lg font-semibold hover:underline bottom-4 left-5 text-gray-50 z-1">{props.name}</span>
                <img src={cardShadow} alt="image shadow" className="absolute bottom-0 left-0 z-0 h-20 rounded-b-xl" />
            </Link>
            </div>
    )
}