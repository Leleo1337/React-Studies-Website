import { useState } from 'react';

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

    function changeText(e){
        const { value, name } = e.target
        
        setMeme(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    async function generateImage(){
        const api = "https://api.imgflip.com/get_memes"

        try{
            const apiResponse = await fetch(api)
            if(apiResponse.ok){
                const randomNumber = Math.floor(Math.random() * 101)

                const data = await apiResponse.json()
                const memeImg = data.data.memes[randomNumber].url
                console.log(data)

                setMeme(prev => {
                    return {
                        ...prev,
                        imgURL: memeImg,
                    }
                })

            }else{
                console.log('api de merda')
            }
        }catch(e){
            console.log('deu erro zé ', e)
        }
    }

    
    function handleSubmit(e){
        e.preventDefault()
    }

    return(
        <>
            <Header />
                <div className='absolute top-1/2 left-1/2 -translate-1/2 w-full max-w-[700px]'>
                    <header className='bg-purple-900 px-8 py-4 rounded-t-md'>
                        <div className='flex items-center gap-4'>
                            <img src={trollFaceImg} alt="Troll face" className='w-11' />
                            <h1 className='text-white text-xl font-semibold'>Meme Generator</h1>
                        </div>
                    </header>
                    <main className='bg-white p-4 sm:py-6 sm:px-12 py-8 rounded-b-md'>
                        <form onSubmit={handleSubmit}>
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
                            <button onClick={generateImage} 
                                className='py-2 px-6 mt-4 w-full bg-purple-800 text-white active:bg-purple-900 rounded-md cursor-pointer'>
                                Get a new meme image  🖼
                            </button>
                        </form>
                        <div className='w-full mt-6 rounded-md shadow-xl bg-black'>
                            <div className='relative'>
                                <img src={meme.imgURL} alt="Random generated meme image" className='opacity-95x rounded-sm max-h-[500px] w-full'/>   
                                <span className='w-full absolute top-0 px-4 py-4 text-center text-white font-meme meme-Text-Shadow text-lg sm:text-3xl'>{meme.topText}</span>
                                <span className='w-full absolute bottom-0 px-4 py-3 text-center text-white font-meme meme-Text-Shadow text-lg sm:text-3xl'>{meme.bottomText}</span>
                            </div>
                        </div>
                    </main>
                </div>
            <Footer />
        </>
    )
}