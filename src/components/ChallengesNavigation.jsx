import { Link } from 'react-router-dom'; // navegação SPA
import { useState } from 'react';

export default function ChallengeCard(props){
    const [ isHovered, setIsHovered ] = useState(false)

    return(
        <div className='items-center w-full h-75 bg-gradient-to-br from-gray-950 via-gray-800 to-gray-600 rounded-md'>
            <div className='w-full h-43 hover:h-48 overflow-hidden rounded-t-sm bg-left-top transition-all ease-in duration-200' >
                <Link to={props.data.path} className='overflow-hidden opacity-75 hover:blur-sm'>
                    <div className='w-full h-full transition ease-in duration-200 hover:scale-105' style={{ backgroundImage: `url(${props.data.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                </Link>
            </div>
            <div className='h-32 p-1'>
                <h1 className='text-center text-white font-semibold text-xl'>{props.data.title}</h1>
                <p className='text-white break-words pt-4 ml-4'>{props.data.summary}</p>
            </div>
        </div>
    )
}