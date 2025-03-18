import { useState, useEffect } from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer';
import trollFaceImg from '../../assets/challenges/c7/trollFace.png'
import memeImg from '../../assets/challenges/c7/memeImg.png'

export default function ChallengeSeven(){

    const [ meme, setMeme ] = useState({
        topText: 'SHUT UP',
        bottomText: 'AND TAKE MY MONEY',
        imgURL: memeImg
    })

    const [ memeImagesArr, setMemeImagesArr ] = useState([])

    function changeText(e){
        const { value, name } = e.target
        
        setMeme(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function getRandomMemeImage(){
        const randomIndex = Math.round(Math.random() * 101)
        const randomMemeImage = memeImagesArr[randomIndex].url

        setMeme(prev => {
            return {
                ...prev,
                imgURL: randomMemeImage
            }
        })
    }



    useEffect(() => {
        const imgApi = "https://api.imgflip.com/get_memes"
        fetch(imgApi)
            .then(response => response.json())
            .then(data => setMemeImagesArr(data.data.memes))
    }, [])

    return(
        <>
            <Header />
                <div className='mx-auto pt-12 w-full max-w-[700px]'>
                    <header className='bg-purple-900 px-8 py-4 rounded-t-md'>
                        <div className='flex items-center gap-4'>
                            <img src={trollFaceImg} alt="Troll face" className='w-11' />
                            <h1 className='text-white text-xl font-semibold'>Meme Generator</h1>
                        </div>
                    </header>
                    <main className='bg-white p-4 sm:py-6 sm:px-12  py-8 rounded-b-md'>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className='flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-16'>
                                <div className='flex flex-col sm:w-1/2'>
                                    <label htmlFor="top" className='text-gray-600 font-semibold pb-1'>Top text</label>
                                    <input 
                                        type="text" name="topText" id="top" 
                                        className='border border-gray-300 rounded-sm px-2 py-0.5 sm:py-1'
                                        value={meme.topText} 
                                        onChange={changeText} 
                                    />
                                </div>
                                <div className='flex flex-col sm:w-1/2'>
                                    <label htmlFor="bottom" className='text-gray-600 font-semibold pb-1'>Bottom text</label>
                                    <input 
                                        type="text" name="bottomText" id="bottom" 
                                        className='border border-gray-300 rounded-sm px-2 py-0.5 sm:py-1' 
                                        value={meme.bottomText} 
                                        onChange={changeText}  
                                    />
                                </div>
                            </div>
                            <button onClick={getRandomMemeImage} 
                                className='w-full py-2 px-6 mt-4  bg-purple-800 text-white active:bg-purple-900 rounded-md cursor-pointer'>
                                Get a new meme image  🖼
                            </button>
                        </form>
                        <div className='relative w-full h-[330px] mt-6 rounded-md shadow-xl bg-black'>
                            <img src={meme.imgURL} alt="Random generated meme image" className=' w-full h-[330px] opacity-95x rounded-sm'/>   
                            <span className='absolute top-0 w-full px-4 py-4 text-center text-white font-meme meme-Text-Shadow text-lg sm:text-3xl'>{meme.topText}</span>
                            <span className='absolute bottom-0 w-full px-4 py-3 text-center text-white font-meme meme-Text-Shadow text-lg sm:text-3xl'>{meme.bottomText}</span>
                        </div>
                    </main>
                </div>
            <Footer />
        </>
    )
}