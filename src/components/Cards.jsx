import { Link } from 'react-router-dom'; // navegação SPA

export default function ChallengeCard(props){
    return(
        <div className='items-center w-full h-70 md:h-75 bg-gradient-to-br from-white/60 via-gray-700/40 to-black/20 rounded-md shadow mb-4'>
            <div className='w-full h-35 md:h-43 md:hover:h-48 overflow-hidden rounded-t-sm bg-left-top transition-all ease-in duration-200' >
                <Link to={props.data.path} className='bg-black overflow-hidden opacity-85 hover:blur-sm'>
                    <div className='w-full h-full transition ease-in duration-200 hover:scale-105' style={{ backgroundImage: `url(${props.data.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                        
                    </div>
                </Link>
                <h1 className='relative bottom-7 px-3 bg-black/85 z-0 bg-gradient-to-br text-lg text-white font-semibold'>{props.data.name}</h1>
            </div>
            <div className='h-32 p-1'>
                <h1 className='mt-2 text-center text-white font-semibold text-xl'>{props.data.title}</h1>
                <p className='text-white break-words text-sm pt-4 ml-4 font-inter'>{props.data.summary}</p>
            </div>
        </div>
    )
}