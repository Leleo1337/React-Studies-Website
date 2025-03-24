import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Die from '../../components/challenges/c8/Die'

import Confetti from 'react-confetti'
import { useEffect, useState, useRef } from 'react'

export default function ChallengeEight(){
    const [ dice, setDice ] = useState(() => generateAllNewDice())
    const gameWon = dice.every(die => die.value === dice[0].value) && dice.every(die => die.isChecked)
    const buttonRef = useRef(null)
    
    const diceElements = dice.map(dieObj =>{
        return <Die key={dieObj.key} id={dieObj.id} value={dieObj.value} toggleGreen={() => toggleCheck(dieObj.key)} isChecked={dieObj.isChecked}/>
    })

    function generateAllNewDice(){
        const ranomNumbersArr = []

        for(let c = 0; c < 10; c++){
            const randomNum = Math.floor(Math.random() * 6) + 1
            ranomNumbersArr.push({
                key: c,
                id: c,
                value: randomNum,
                isChecked: false
            })
        }
        return ranomNumbersArr
    }

    function rerollDices(){
        setDice(prev => prev.map(die => {
            return die.isChecked? die : { ...die, value: Math.floor(Math.random() * 6) + 1 }
        }))
    }
    
    function toggleCheck(id){
        setDice(prev => prev.map(die => {
            return die.id === id? { ...die, isChecked: !die.isChecked } : die
        }))
    }

    function playAgain(){
        setDice(generateAllNewDice())
    }

    useEffect(() => {
        if(gameWon){
            buttonRef.current.focus()
        }
    }, [gameWon])

    useEffect(() => {
        document.body.classList.add('bg-c8Background')

        return () =>{
            document.body.classList.remove('bg-c8Background')
        }
    },[])

    return(
        <>
            {gameWon? <Confetti width={window.innerWidth - 10 || 300}height={window.innerHeight - 10 || 300}/> : null}
            <Header />
                <div className='absolute top-1/2 left-1/2 -translate-1/2 w-[95%] max-w-[400px] p-4 pb-12 space-y-5 bg-gray-50 rounded-md'>
                    <div>
                        <h1 className='font-semibold pb-2 text-2xl text-center'>Tenzies</h1>
                        <p className='text-md text-center text-gray-600'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                    </div>
                    <div className='grid grid-cols-4 grid-rows-3 justify-items-center h-54'>
                        {diceElements}
                    </div>
                    <button ref={buttonRef} onClick={gameWon? playAgain : rerollDices} className='block w-32 bg-blue-800 hover:bg-blue-900 active:bg-blue-950 text-white rounded-md px-4 py-2 mx-auto cursor-pointer'>{gameWon? 'New game': 'Roll'}</button>
                </div>
            <Footer />
        </>
    )
}