import { useEffect, useState } from "react";
import clsx from 'clsx';
import ReactConfetti from "react-confetti";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Lang from "../../components/challenges/c9/Lang";
import Message from "../../components/challenges/c9/Message.jsx";
import KeyCap from '../../components/challenges/c9/Keycap.jsx'
import LetterBox from "../../components/challenges/c9/LetterBox.jsx";

import { words } from "../../data/challenge_9/words.js";
import { languages } from "../../data/challenge_9/languagesList.js";

export default function ChallengeNine(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const [ currentWord, setCurrentWord ] = useState(() => getRandomWord())
    const [ guessedLetters, setGuessedLetters ] = useState([])
    
    const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length

    const isGameWon = currentWord.split('').every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1
    const isGameOver = isGameWon || isGameLost

    const LanguageElements = languages.map((lang,index) => {
        const isLanguageLost = wrongGuessCount > index
        return(
            <Lang name={lang.name} isLost={isLanguageLost} background={lang.backgroundColor} color={lang.color}/>
        )
    })

    const letterBoxElements = currentWord.split('').map((letter,index) => {
        const shouldRevealLetters = isGameLost || guessedLetters.includes(letter)
        const revealStyles = clsx({
            'text-red-500': isGameLost && !guessedLetters.includes(letter)
        }
        )
            return(
                <LetterBox revealStyles={revealStyles} key={index} letter={shouldRevealLetters ? letter : ''} ></LetterBox>
            )
        })

    const keysElements = alphabet.split('').map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)

        const statusClass = clsx({
            'bg-red-500': isWrong,
            'bg-green-500': isCorrect,
            'bg-yellow-500': !isWrong && !isCorrect,
            'opacity-75': isGameOver
        })
        
        return(
            <KeyCap key={letter} letter={letter} status={statusClass} guess={() => addGuessedLetters(letter)} disabled={isGameOver}/> 
        )
    })  

    function addGuessedLetters(letter){
        setGuessedLetters(prevLetter => {
            return(
                prevLetter.includes(letter)? prevLetter : [...prevLetter, letter]
            )
        })
    }

    function getMessage(){
        const previousCorrectLetter = guessedLetters[guessedLetters.length - 1]
        if(isGameOver){
            return(
                <Message 
                    gameWon={isGameWon} 
                    gameLost={isGameLost} t
                    title={isGameWon ? 'You win!': 'Game Over'} 
                    message={isGameWon? 'Well done! 🎉':  'You lose! Better start learning Assembly 😭'}
                />
            )
        }else if(wrongGuessCount > 0 && !currentWord.includes(previousCorrectLetter)){
            return <Message deadLang={getDead()} color={'#7A5EA7'}/>
        }
    }

    function getRandomWord(){
        const randomNum = Math.round(Math.random() * words.length)
        const randomWord = words[randomNum]

        return randomWord
    }

    function getDead(){
        return languages[wrongGuessCount - 1].name
    }

    function newGame(){
        setCurrentWord(getRandomWord())
        setGuessedLetters([])
    }

    return(
        <>
            <Header />
                <div className="w-[95%] max-w-[650px] bg-zinc-900 mx-auto mt-4 p-6 rounded-md">
                    <div className="space-y-4">
                        <h1 className="text-white text-xl font-semibold text-center">Assembly: Endgame</h1>
                        <p className="text-white text-center">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
                    </div>
                    <div className="py-6 mb-8 md:mb-0 h-40">
                        {getMessage()}
                    </div>
                    <div className="flex flex-wrap gap-y-2 max-w-[480px] justify-center mx-auto space-x-2">
                        {LanguageElements}
                    </div>
                    <div className="flex justify-center flex-wrap gap-1 gap-y-2 py-8">
                        {letterBoxElements}
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 max-w-[600px] mx-auto">
                        <div className="flex flex-wrap  justify-center gap-2 ">
                            {keysElements}
                        </div>
                        <div>
                            {isGameOver &&  
                                <button onClick={newGame} className="bg-blue-500 mb-10 md:mb-0 hover:bg-blue-400 outline-1 outline-white py-2 w-46 font-semibold cursor-pointer">New Game</button>
                            }
                        </div>
                    </div>
                </div>
                {isGameWon && <ReactConfetti width={window.innerWidth - 20} height={window.innerHeight - 10}/>}
            <Footer />
        </>
    )
}
