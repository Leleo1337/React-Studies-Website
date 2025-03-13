import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Pad from '../../components/challenges/c6/Pad'

import padsData from '../../data/padsData'
import { useState } from 'react'

export default function ChallengeSix(){
    const [ pads, setPads ] = useState(padsData)

    const buttonElement = pads.map(pad => {
        return(
            <Pad id={pad.id} key={pad.id} color={pad.color} isOn={pad.on} toggle={handleToggle}/>
        )
    })

    function handleToggle(id) {
        setPads(prev => prev.map(pad => 
            pad.id === id ? { ...pad, on: !pad.on } : pad
        ))
    }

    function turnAllOff(){
        setPads(prev => prev.map(pad => {
            return {...pad, on: false }
        }))
    }


    return(
        <>
            <Header />
                <main className='absolute top-1/2 left-1/2 -translate-1/2 bg-zinc-900 w-full max-w-[450px] rounded-sm'>
                    <div className='grid grid-cols-2 p-4 gap-4'>   
                        {buttonElement}
                    </div>
                    <button onClick={turnAllOff} className='bg-red-600 px-2 py-1 ml-4 mb-2 text-white rounded-sm cursor-pointer active:bg-red-500'>Turn all off</button>
                </main>
            <Footer />
        </>
    )
}


