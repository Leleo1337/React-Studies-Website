import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Lang from "../../components/challenges/c9/Lang";
import Message from "../../components/challenges/c9/Message.jsx";
import KeyCap from '../../components/challenges/c9/Keycap.jsx'
import LetterBox from "../../components/challenges/c9/LetterBox.jsx";

import { useEffect, useState } from "react";
import { lettersObj } from "../../data/challenge_9/letters.js";
import { words } from "../../data/challenge_9/words.js";

export default function ChallengeNine(){
    const [ randomWord, setRandomWord ] = useState(() => getRandomWord())
    const [ attempts, setAttempts ] = useState(0)
    const [ guessStr, setGuessStr ] = useState('')

    const [ letters, setLetters ] = useState(lettersObj)

    const [ langs, setLangs ] = useState(['HTML','CSS','Javascript','React','Typescript','Node.js','Python','Ruby','Assembly'])
    const [ deadLangArr, setDeadLangsArr ] = useState([])
    const [ deadLang, setDeadLang ] = useState('')

    const LetterBoxes = randomWord.word.map((letter, index) => (
        <LetterBox 
            key={index} 
            letter={guessStr.includes(letter)? letter : '2'}
        />
    ))

    const KeyCaps = letters.map(obj => (
        <KeyCap
            key={obj.key} 
            id={obj.id} 
            letter={obj.letter} 
            click={() => checkGuess(obj.letter)} 
            status={obj.status}
        />
    ))

    function checkGuess(pressedKey){
        setAttempts(deadLangArr.length)
        if(attempts >= 7) return


        pressedKey = pressedKey.toLowerCase()
        const isCorrect = randomWord.word.includes(pressedKey)

        
        setLetters(prev => prev.map(letter => 
            letter.letter.toLowerCase() === pressedKey
            ? { ...letter, status: isCorrect ? 'correct' : 'incorrect' }
            : letter
        ));
        

        if(randomWord.word.includes(pressedKey)){
            setGuessStr(prev => prev + pressedKey) 
        }else{
            setLangs(prev => {
                const newLangs = [...prev]
                const removedItem = prev[0]
                setDeadLangsArr(prev => [...prev, removedItem])
                setDeadLang(removedItem)
                
                return newLangs.slice(1);
            })
        }

    }
    
    function getRandomWord(){
        const randomIndex = Math.floor(Math.random() * words.length)
        const randomWord = words[randomIndex]
        
        return {
            word: randomWord.split('')
        }
        
    }

    function hasDied(lang){
        if(deadLangArr.includes(lang)){
            return true 
        }else{
            return false
        }
    }

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
                        {deadLang?
                                <Message deadLang={deadLang} color={'#7A5EA7'}/> 
                            : null 
                        }
                    </div>
                    <div className="max-w-[500px]  mx-auto space-x-2 space-y-2">
                        <Lang lang={'HTML'} bgColor={'#E2680F'} textColor={'white'} status={hasDied('HTML') ? 'dead': 'alive'}/>
                        <Lang lang={'CSS'} bgColor={'#328AF1'} textColor={'white'} status={hasDied('CSS') ? 'dead': 'alive'} />
                        <Lang lang={'Javascript'} bgColor={'#E2680F'} textColor={'black'} status={hasDied('Javascript') ? 'dead': 'alive'} />
                        <Lang lang={'React'} bgColor={'#2ED3E9'} textColor={'black'} status={hasDied('React') ? 'dead': 'alive'} />
                        <Lang lang={'Typescript'} bgColor={'#298EC6'} textColor={'white'} status={hasDied('Typescript') ? 'dead': 'alive'} />
                        <Lang lang={'Node.js'} bgColor={'#599137'} textColor={'white'} status={hasDied('Node.js') ? 'dead': 'alive'} />
                        <div className="sm:flex justify-center space-x-2">
                            <Lang lang={'Python'} bgColor={'#FFD742'} textColor={'black'} status={hasDied('Python') ? 'dead': 'alive'} />
                            <Lang lang={'Ruby'} bgColor={'#D02B2B'} textColor={'white'} status={hasDied('Ruby') ? 'dead': 'alive'} />
                            <Lang lang={'Assembly'} bgColor={'#2D519F'} textColor={'white'} status={hasDied('Assembly') ? 'dead': 'alive'} />
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
