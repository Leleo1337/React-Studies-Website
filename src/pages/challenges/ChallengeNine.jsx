import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Lang from "../../components/challenges/c9/Lang";
import Message from "../../components/challenges/c9/Message.jsx";
import KeyCap from '../../components/challenges/c9/Keycap.jsx'
import LetterBox from "../../components/challenges/c9/LetterBox.jsx";

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import { letters } from "../../data/challenge_9/letters.js";
import { words } from "../../data/challenge_9/words.js";

export default function ChallengeNine(){
    const KeyCaps = letters.map(({key,letter}) => (
        <KeyCap key={key} id={key} letter={letter} />
    ))
    const [ randomWord, setRandomWord ] = useState(() => getRandomWord())
    const [ gess, setGuess ] = useState('')

    

    function getRandomWord(){
        const randomIndex = Math.floor(Math.random() * words.length)
        const randomWord = words[randomIndex]

        return {
            word: randomWord.split('')
        }
    }

    const LetterBoxes = randomWord.word.map((letter, index) => (
        <LetterBox key={index} letter={letter} />
    ))

    useEffect(() => {
        document.body.style.height = '120vh'

        return () => document.body.style.height = 'auto'
    },[])

    return(
        <>
            <Header />
                <div className="w-[95%] max-w-[900px] bg-zinc-800 mx-auto mt-4 p-6 ">
                    <div className="space-y-4">
                        <h1 className="text-white text-xl font-semibold text-center">Assembly: Endgame</h1>
                        <p className="text-white text-center">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
                    </div>
                    <div className="py-6 h-40">
                        <Message deadLang={''} color={'#7A5EA7'}/>
                    </div>
                    <div className="max-w-[500px]  mx-auto space-x-2 space-y-2">
                        <Lang lang={'HTML'} bgColor={'#E2680F'} textColor={'white'} />
                        <Lang lang={'CSS'} bgColor={'#328AF1'} textColor={'white'} />
                        <Lang lang={'Javascript'} bgColor={'#E2680F'} textColor={'black'} />
                        <Lang lang={'React'} bgColor={'#2ED3E9'} textColor={'black'} />
                        <Lang lang={'Typescript'} bgColor={'#298EC6'} textColor={'white'} />
                        <Lang lang={'Node.js'} bgColor={'#599137'} textColor={'white'} />
                        <div className="sm:flex justify-center space-x-2">
                            <Lang lang={'Python'} bgColor={'#FFD742'} textColor={'black'} />
                            <Lang lang={'Ruby'} bgColor={'#D02B2B'} textColor={'white'} />
                            <Lang lang={'Assembly'} bgColor={'#2D519F'} textColor={'white'} />
                        </div>
                    </div>
                    <div className="flex justify-center flex-wrap gap-1 gap-y-2 py-12">
                        {LetterBoxes}
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 max-w-[600px] mx-auto">
                        {KeyCaps}
                    </div>
                </div>
            <Footer />
        </>
    )
}
