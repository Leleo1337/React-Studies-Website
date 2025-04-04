import Header from '../../components/Header'
import Footer from '../../components/Footer';

import reactLogo from '../../assets/reactLogo.png'
import reactBg from '../../assets/challenges/c1/reactC1Bg.svg'

export default function ChallengeOne(){
    return(
        <>
            <Header />
            <div className="absolute top-[50%] left-[50%] translate-[-50%] w-[95%] sm:w-[500px] rounded-md overflow-hidden shadow-xl">
                <header className="flex w-full bg-c1Header h-[90px] rounded-t-md"> {/* Container header */}
                    <div className="flex items-center justify-start gap-2 ml-6 text-cyan-300">
                        <img src={reactLogo} alt="REACT " className="w-8 "/>
                        <span className="text-xl font-semibold font-inter">ReactFacts</span>
                    </div>
                </header>
                <main className="gap-6 p-6 pb-16 bg-MainBg">
                    <div>
                        <h1 className="mt-8 text-4xl font-bold text-white font-inter">Fun facts about React</h1>
                        <ul className="pl-12 sm:pl-12 text-gray-200 list-disc mt-9 marker:text-cyan-400 marker:text-2xl marker:relative marker:top-32 text-md">
                            <li>Was first released in 2013</li>
                            <li>Was originally created by Jordan Walke</li>
                            <li>Has well over 100k stars on GitHub</li>
                            <li>Is mainted by Meta</li>
                            <li className='w-64'>Powers thousands of interprise apps, including mobile apps</li>
                        </ul>
                    </div>
                    <div className="w-18"><img src={reactBg} alt="React  at the background" className="absolute bottom-18 left-97 w-[260px]"/></div>
                </main>
            </div>
            <Footer />
        </>
    )
}