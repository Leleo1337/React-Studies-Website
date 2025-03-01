import { Link } from 'react-router-dom'; // Adicione esta importação
const leleo1337 = 'https://avatars.githubusercontent.com/u/168025120?v=4'

export default function NavBar(){
    return(
        <header>
            <nav className='w-full fixed top-0 flex gap-6 justify-around items-center bg-gray-900 px-2 py-4 drop-shadow-md overflow-hidden z-1'>
                <a href="https://github.com/leleo1337" target="_blank" rel="noopener noreferrer">
                    <img src={leleo1337} alt="Minha foto do github" className="w-10 rounded-full" />
                </a>
                <ul className="flex gap-4 text-md">
                    <li className="underline text-gray-400 hover:text-white">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="underline text-gray-400 hover:text-white">
                        <Link to="/">About</Link> 
                    </li>
                    <li className="underline text-gray-400 hover:text-white">
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}