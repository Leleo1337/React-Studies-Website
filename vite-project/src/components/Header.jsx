import React from "react"
import '../index.css'

import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import tailwindLogo from '../assets/tailwindLogo.png'

export default function Header(){
    return(
        <header>
            <nav className='flex gap-3 justify-around items-center bg-gray-900 p-4 drop-shadow-md'>
                <div className="flex gap-3 items-center">
                    <img src={reactLogo}/>
                    <img src={viteLogo}/>
                    <img className='w-8 h-6' src={tailwindLogo}/>
                </div>
                <ul className="flex gap-6">
                    <li className="underline text-white"><a href="#">Home</a></li>
                    <li className="underline text-white"><a href="#">About</a></li>
                    <li className="underline text-white"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}