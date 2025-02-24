import React from "react"
import '../index.css'

import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import tailwindLogo from '../assets/tailwindLogo.png'

export default function Header(){
    return(
        <header className='flex gap-3 justify-center items-center bg-gray-200'>
            <h1 className='text-xl text-gray-600 p-4 rounded-2xl'>Estou usando Vite, React + TailwindCSS</h1>
            <img src={reactLogo}/>
            <img src={viteLogo}/>
            <img className='w-8 h-6' src={tailwindLogo}/>
        </header>
    )
}