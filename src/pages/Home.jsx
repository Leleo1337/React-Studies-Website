import StaticPageCards from "../components/StaticPagesCards"

import viteLogo from '../assets/img/vite.svg'
import reactLogo from '../assets/img/reactLogo.png'
import tailwindLogo from '../assets/img/tailwindLogo.png'


export default function Home(){
    return(
        <>            
            <main>
                <section className='bg-gray-900 pt-8 pb-8 px-4 text-center'>
                    <div className="flex gap-3 items-center justify-center ">
                        <img className="w-10" src={viteLogo} alt="TailWindCSS Logo" />
                        <img className='w-12'src={reactLogo} alt="React Logo" />
                        <img className="w-12" src={tailwindLogo} alt="TailWindCSS Logo" />
                    </div>
                    <h1 className='text-white text-5xl text-center py-4 font-semibold'>About this project</h1>
                    <p className="text-white">I'm building this website to learn react and enhance my skills in Tailwind CSS, HTML and JavaScript, following the
                    <span className="underline text-blue-300"><a href="https://scrimba.com/learn-react-c0e" target="_blank"> "Learn React" course on Scrimba</a> </span>, this website is made to apply what I've learned in the lessons.</p>
                </section>
                <section className='bg-gray-900 p-2 py-8'>
                    <h2 className='text-4xl text-white font-semibold px-2.5 text-center'>Reasons I am excited to learn react <span><img className='w-8 mb-1.5 inline'src={reactLogo} alt="React Logo" /></span> </h2>
                    <ol className='text-white md:list-decimal md:w-120 md:m-auto pt-2'>
                        <li className='py-2'>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                        <li>I am more likely to get a job as a front end developer if I know React</li>
                    </ol>
                </section>
                <section className="w-full bg-gray-950 m-auto px-2 pt-4 pb-20">
                    <h1 className="text-3xl text-white font-semibold text-center py-8">Course Exercises / Challenges</h1>

                    <div className="border-b pb-8 border-gray-900">
                        <h3 className="text-2xl text-white text-center pb-8 font-bold">Static pages</h3>
                        <StaticPageCards/>
                    </div>
                </section>
            </main>
        </>
    )
}