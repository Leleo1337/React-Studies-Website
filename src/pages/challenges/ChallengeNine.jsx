import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Lang from "../../components/challenges/c9/Lang";
import Message from "../../components/challenges/c9/Message.jsx";
import KeyCap from '../../components/challenges/c9/Keycap.jsx'
import LetterBox from "../../components/challenges/c9/LetterBox.jsx";

import { languages } from "../../data/challenge_9/languagesList.js";
import { useEffect, useState } from "react";
import clsx from 'clsx';

export default function ChallengeNine(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const [ currentWord, setCurrentWord ] = useState("react")
    const [ guessedLetters, setGuessedLetters ] = useState([])
    
    const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length

    const LanguageElements = languages.map(lang => (
        <Lang name={lang.name} background={lang.backgroundColor} color={lang.color}/>
    ))

    const letterBoxElements = currentWord.split('').map((letter,index) => (
        <LetterBox key={index} letter={guessedLetters.includes(letter) ? letter : '' } ></LetterBox>
    ))

    const keysElements = alphabet.split('').map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)

        const statusClass = clsx({
            'bg-red-500': isWrong,
            'bg-green-500': isCorrect,
            'bg-yellow-500': !isWrong && !isCorrect
        })
        
        return(
            <KeyCap key={letter} letter={letter} status={statusClass} guess={() => addGuessedLetters(letter)}/> 
        )
    })  

    function addGuessedLetters(letter){        
        setGuessedLetters(prevLetter => {
            return(
                prevLetter.includes(letter)? prevLetter : [...prevLetter, letter]
            )
        })
    }

    useEffect(()=> {
        console.log(wrongGuessCount)

    },[wrongGuessCount])


    return(
        <>
            <Header />
                <div className="w-[95%] max-w-[800px] bg-zinc-800 mx-auto mt-4 p-6 rounded-md">
                    <div className="space-y-4">
                        <h1 className="text-white text-xl font-semibold text-center">Assembly: Endgame</h1>
                        <p className="text-white text-center">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
                    </div>
                    <div className="py-6 h-40">
                        <Message lang={'react'} color={'purple'}/>
                    </div>
                    <div className="flex flex-wrap gap-y-2 max-w-[480px] justify-center mx-auto space-x-2">
                        {LanguageElements}
                    </div>
                    <div className="flex justify-center flex-wrap gap-0.5 gap-y-2 py-12">
                        {letterBoxElements}
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 max-w-[600px] mx-auto">
                        <div className="flex flex-wrap  justify-center gap-2 ">
                            {keysElements}
                        </div>
                        <div>
                            <button  className="bg-blue-500 hover:bg-blue-400 outline-1 outline-white py-2 w-46 font-semibold cursor-pointer">New Game</button>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}
