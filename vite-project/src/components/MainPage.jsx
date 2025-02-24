import React from "react"
import '../index.css'
import exerciseLogo from '../assets/reactLogo.png'

export default function MainPage(){
    return(
        <main>
            <section className='bg-gray-900 p-4'>
                <img className='w-12'src={exerciseLogo} alt="React Logo" />
                <h1 className='py-3 text-3xl text-white font-semibold'>Fun facts about React</h1>
                <ul className='text-white list-disc px-10'>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is mainted by Meta</li>
                    <li>Powers thousands of interprise apps, including mobile apps</li>
                </ul>
            </section>
            <section className='bg-gray-800 p-4'>
                <img className='w-12'src={exerciseLogo} alt="React Logo" />
                <h1 className='text-3xl text-white font-semibold'>Reasons I am excited to learn react</h1>
                <ol className='list-decimal text-white px-10'>
                <li className='py-2'>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer if I know React</li>
                </ol>
            </section>
        </main>
    )
}