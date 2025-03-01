import Header from '../components/Header'
import Footer from '../components/Footer';
import StaticPageCard from "../components/StaticPagesNavigation"

import viteLogo from '../assets/vite.svg'
import reactLogo from '../assets/reactLogo.png'
import tailwindLogo from '../assets/tailwindLogo.png'


import c1Blur from "../assets/challenges/HomePage/c1Blur.png"
import c1NoBlur from "../assets/challenges/HomePage/c1NoBlur.png"
import c2Blur from "../assets/challenges/HomePage/c2Blur.png"
import c2NoBlur from "../assets/challenges/HomePage/c2NoBlur.png"



export default function Home(){
    return(
        <>
            <Header />
            <main>
                <section className='px-4 pt-8 pb-8 text-center bg-gray-900'>
                    <div className="flex items-center justify-center gap-3 ">
                        <img className="w-10" src={viteLogo} alt="TailWindCSS Logo" />
                        <img className='w-12'src={reactLogo} alt="React Logo" />
                        <img className="w-12" src={tailwindLogo} alt="TailWindCSS Logo" />
                    </div>
                    <h1 className='py-4 text-5xl font-semibold text-center text-white'>About this project</h1>
                    <p className="text-white">I'm building this website to learn react and enhance my skills in Tailwind CSS, HTML and JavaScript, following the
                    <span className="text-blue-300 underline"><a href="https://scrimba.com/learn-react-c0e" target="_blank"> "Learn React" course on Scrimba</a> </span>, this website is made to apply what I've learned in the lessons.</p>
                </section>
                <section className='p-2 py-8 bg-gray-900'>
                    <h2 className='text-4xl text-white font-semibold px-2.5 text-center'>Reasons I am excited to learn react <span><img className='w-8 mb-1.5 inline'src={reactLogo} alt="React Logo" /></span> </h2>
                    <ol className='pt-2 text-white md:list-decimal md:w-120 md:m-auto'>
                        <li className='py-2'>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                        <li>I am more likely to get a job as a front end developer if I know React</li>
                    </ol>
                </section>
                <section className="w-full px-2 pt-4 pb-20 m-auto bg-gray-950">
                    <h1 className="py-8 text-3xl font-bold text-center text-white">Course Exercises / Challenges</h1>

                    <div className="pb-8 border-b border-gray-900">
                        <div className="flex flex-col gap-4 px-12 lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:justify-items-center">
                            <StaticPageCard
                                title="Static page"
                                name="Challenge 1 /ReactFacts"
                                img={c1Blur}
                                hoverImg={c1NoBlur}
                                path="c1"
                            />
                            <StaticPageCard
                                title="Data driven React"
                                name="Challenge 1 / Contracts"
                                img={c2Blur}
                                hoverImg={c2NoBlur}
                                path="c2"
                            />
                            <StaticPageCard
                                title="TITLE"
                                name="Empty"
                                img="src"
                                hoverImg="src"
                                path=""
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}