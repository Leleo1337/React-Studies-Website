import { Link, useNavigate } from 'react-router-dom'; // react router navigation tag
const leleo1337 = 'https://avatars.githubusercontent.com/u/168025120?v=4'

export default function NavBar(){
    const navigate = useNavigate()

    const handleAboutClick = (e) => {
        e.preventDefault()
        navigate('/')
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }

    return(
        <header className='fixed top-0 w-full z-1'>
            <nav className='flex items-center justify-around gap-6 px-2 py-4 overflow-hidden bg-zinc-900 drop-shadow-md z-1'>
                <a href="https://github.com/leleo1337" target="_blank" rel="noopener noreferrer">
                    <img src={leleo1337} alt="Minha foto do github" className="w-10 rounded-full" />
                </a>
                <ul className="flex gap-4 text-md">
                    <li className="text-gray-400 underline hover:text-white">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-gray-400 underline hover:text-white">
                        <a onClick={handleAboutClick} to="/" className='cursor-pointer'>About</a> 
                    </li>
                    <li className="text-gray-400 underline hover:text-white">
                        <a href="https://github.com/leleo1337" target='_blank'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}