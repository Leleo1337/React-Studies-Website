import Header from '../components/Header'
import Footer from '../components/Footer';

import ChallengeCard from "../components/ChallengesNavigation.jsx"
import cardData from './cardData.js'

import viteLogo from '../assets/vite.svg'
import reactLogo from '../assets/reactLogo.png'
import tailwindLogo from '../assets/tailwindLogo.png'
import bgImage from '../assets/bgImage.webp'

export default function Home(){
    // gambiarra :p
    
    document.body.classList.remove('bg-gray-100')
    document.body.classList.add('bg-mainBg')
    
    const challengeCards = cardData.map(data =>{
        return <ChallengeCard data={data}/>
    })

    return(
        <>
            <Header />
            <main>
                <section className='flex flex-col items-center justify-center flex-nowrap shrink h-[78vh] px-4 pt-8 pb-8 bg-black opacity-99'>
                    <div className='absolute t-0 w-full h-[78vh] -z-3'><img src={bgImage} className='w-full h-full opacity-5' /></div>
                    <img src="https://avatars.githubusercontent.com/u/168025120?v=4" alt="Leleo1337 github image" className='rounded-full w-40 mb-8' />
                    <div className="flex items-center justify-center gap-3 ">
                        <img className="w-10" src={viteLogo} alt="TailWindCSS Logo" />
                        <img className='w-12'src={reactLogo} alt="React Logo" />
                        <img className="w-12" src={tailwindLogo} alt="TailWindCSS Logo" />
                    </div>
                    <h1 className='pb-12 text-5xl font-semibold text-center text-white'>About this project</h1>
                    <p className="text-white text-center text-">I'm building this website to learn react and enhance my skills in Tailwind CSS, HTML and JavaScript, following the <span className="text-blue-300 underline"><a href="https://scrimba.com/learn-react-c0e" target="_blank">"Learn React" course on Scrimba</a> </span>, this website is made to apply what I've learned in the lessons.</p>
                </section>
                <section className="w-full px-2 pt-4 pb-20 m-auto bg-zinc-950">
                    <h1 className="py-8 text-3xl font-bold text-center text-white">Course Exercises / Challenges</h1>
                    <div className="pb-8 border-b border-gray-900">
                        <div className="flex flex-col  gap-4 px-4 sm:grid sm:grid-rows-1 sm: sm:grid-cols-2 sm:justify-items-center lg:grid-cols-3 lg:justify-items-center">
                            {challengeCards}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}