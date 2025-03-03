import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Joke from '../../components/challenges/Joke'

export default function ChallengeThree(){
    return(
        <>
            <Header />
            <main>
                <div className='absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-y-1/2 -translate-x-1/2 bg-gray-50 p-4 rounded-xl shadow-md'>
                    <Joke
                        setup="What's the best thing about Switzerland?"
                        punchline="I don't know, but the flag is a big plus!"
                    />
                    <Joke 
                        setup="I got my daughter a fridge for her birthday." 
                        punchline="I can't wait to see her face light up when she opens it."
                    />
                    <Joke 
                        setup="How did the hacker escape the police?" 
                        punchline="He just ransomware!"
                    />
                    <Joke 
                        setup="Why don't pirates travel on mountain roads?" 
                        punchline="Scurvy."
                    />
                    <Joke 
                        setup="Why do bees stay in the hive in the winter?" 
                        punchline="Swarm."
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}