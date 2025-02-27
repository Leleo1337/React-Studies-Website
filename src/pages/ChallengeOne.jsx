import Header from "../components/header"
import Footer from "../components/Footer"

import react from '../assets/img/reactLogo.png'
import reactBg from "../assets/img/reactC1.svg"


export default function ChallengeOne(){
    return(
        <>
            <Header />  {/* Page header */}
            <p className="text-3xl">oi</p>
                <div className="container absolute top-[50%] left-[50%] translate-[-50%] w-[520px] bg-gray-800 rounded-md overflow-hidden shadow-xl">
                    <header className="flex w-full bg-c1Header h-[90px] rounded-t-md"> {/* Container header */}
                        <div className="flex justify-start items-center gap-2 ml-6 text-cyan-300">
                            <img src={react} alt="REACT " className=" w-8 "/>
                            <span className="font-semibold text-xl font-inter">ReactFacts</span>
                        </div>
                    </header>
                    <main className="flex gap-6 bg-c1Main p-6 pb-16">
                        <div>
                            <h1 className="text-white text-4xl font-inter font-bold mt-8">Fun facts about React</h1>
                            <ul className="list-disc ml-12 mt-9 marker:text-cyan-400 marker:text-2xl marker:relative marker:top-32 text-md text-gray-200">
                                <li className="mb-2">Was first released in 2013</li>
                                <li className="mb-2">Was originally created by Jordan Walke</li>
                                <li className="mb-2">Has well over 100k stars on GitHub</li>
                                <li className="mb-2">Is mainted by Meta</li>
                                <li className="mb-2">Powers thousands of interprise apps, including mobile apps</li>
                            </ul>
                        </div>
                        <div className="w-18"><img src={reactBg} alt="React  at the background" className="absolute bottom-18 left-97 w-[260px]"/></div>
                    </main>
                </div>
            <Footer />
        </>
    )
}