import Header from "../components/header"
import Footer from "../components/Footer"

import viteLogo from '../assets/img/vite.svg'
import reactLogo from '../assets/img/reactLogo.png'
import tailwindLogo from '../assets/img/tailwindLogo.png'


export default function Home(){
    return(
        <>
            <Header />
                <main>
                    <section className="bg-gray-900 pt-24 pb-2">
                        <h1 className='text-xl text-white text-center pb-4'>Estou usando Vite, React e TailwindCSS</h1>
                        <div className="flex gap-3 items-center justify-center ">
                            <img className="w-10" src={viteLogo} alt="TailWindCSS Logo" />
                            <img className='w-12'src={reactLogo} alt="React Logo" />
                            <img className="w-12" src={tailwindLogo} alt="TailWindCSS Logo" />
                        </div>
                    </section>
                    <section className='bg-gray-900 pt-2 pb-8 px-4 text-center'>
                        <h1 className='text-white text-3xl text-center py-4 font-semibold'>About this project</h1>
                        <p className="text-white">I'm building this website to learn react and enhance my skills in Tailwind CSS, HTML and JavaScript, following the
                        <span className="underline text-blue-300"><a href="https://scrimba.com/learn-react-c0e" target="_blank"> "Learn React" course on Scrimba</a> </span>, this website is made to apply what I've learned in the lessons.</p>
                    </section>
                    <section className='bg-gray-950 p-2'>
                        <h1 className='text-white text-3xl text-center md:text-start py-4 font-semibold'>Fun facts about React</h1>
                        <ul className='text-white list-disc ml-8 pb-8'>
                            <li>Was first released in 2013</li>
                            <li>Was originally created by Jordan Walke</li>
                            <li>Has well over 100k stars on GitHub</li>
                            <li>Is mainted by Meta</li>
                            <li>Powers thousands of interprise apps, including mobile apps</li>
                        </ul>
                    </section>
                    <section className='bg-gray-900 p-2 py-8'>
                        <h1 className='text-3xl text-white font-semibold px-2.5'>Reasons I am excited to learn react <span><img className='w-8 mb-1.5 inline'src={reactLogo} alt="React Logo" /></span> </h1>
                        <ol className='list-decimal text-white ml-8'>
                            <li className='py-2'>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                            <li>I am more likely to get a job as a front end developer if I know React</li>
                        </ol>
                    </section>
                    <section className="w-full bg-gray-950 m-auto px-2 pt-4 pb-20">
                        <h1 className="text-3xl text-white font-semibold text-center py-8">Course Challenges / Exercises</h1>
                        <div className="flex flex-col gap-4 lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:justify-items-center">
                            <a href="c1" className="w-full lg:w-[80%] flex items-center justify-center h-40 bg-gray-300 hover:bg-gray-400 rounded-xl cursor-pointer">
                                <span>Empty</span>
                            </a>
                            
                            <a href="c2" className="w-full lg:w-[80%] flex items-center justify-center h-40 bg-gray-300 hover:bg-gray-400 rounded-xl cursor-pointer">
                                <span>Empty</span>
                            </a>
                            
                            <a href="c3" className="w-full lg:w-[80%] flex items-center justify-center h-40 bg-gray-300 hover:bg-gray-400 rounded-xl cursor-pointer">
                                <span>Empty</span>
                            </a>
                        </div>
                    </section>
                </main>
            <Footer />
        </>
    )
}

