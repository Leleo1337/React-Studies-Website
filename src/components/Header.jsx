const leleo1337 = 'https://avatars.githubusercontent.com/u/168025120?v=4'

export default function NavBar(){
    return(
        <header>
            <nav className='w-full fixed top-0 flex gap-6 justify-around items-center bg-gray-900 px-2 py-4 drop-shadow-md overflow-hidden z-1'>
                <a href="https://github.com/leleo1337" target="_blank"><img src={leleo1337} alt="Minha foto do github" className="w-10 rounded-full" /></a>
                <ul className="flex gap-4 text-md">
                    <li className="underline text-gray-400 hover:text-white"><a href="Home">Home</a></li>
                    <li className="underline text-gray-400 hover:text-white"><a href="#">About</a></li>
                    <li className="underline text-gray-400 hover:text-white"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}