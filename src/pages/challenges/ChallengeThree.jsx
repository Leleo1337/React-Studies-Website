import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Joke from '../../components/challenges/c3/Joke'
import { useEffect } from 'react'

export default function ChallengeThree(){
    useEffect(() => {
        document.body.classList.add('bg-gray-100');

        return () => {
            document.body.classList.remove('bg-gray-100');
        };
    }, []);

    return(
        <>
            <Header />
            <main>
                <div className='absolute top-1/2 left-1/2 w-[95%] sm:w-[500px] sm:h-[600px] -translate-y-1/2 -translate-x-1/2 bg-gray-50 p-4 mt-20 sm:mt-0 pb-20 rounded-xl shadow-md'>
                    <Joke
                        setup="What's the best thing about Switzerland?"
                        punchline="I don't know, but the flag is a big plus!"
                        upvotes={8}
                        downvotes={3}
                        comments={['good one', 'kkkkk', 'hahahaha']}
                        isPun={true}
                    />
                    <Joke 
                        setup="I got my daughter a fridge for her birthday." 
                        punchline="I can't wait to see her face light up when she opens it."
                        upvotes={13}
                        downvotes={6}
                        comments={['good one', 'kkkkk', 'hahahaha']}
                        isPun={true}
                    />
                    <Joke 
                        setup="How did the hacker escape the police?" 
                        punchline="He just ransomware!"
                        upvotes={4}
                        downvotes={6}
                        comments={['good one', 'kkkkk', 'hahahaha']}
                        isPun={true}
                    />
                    <Joke 
                        setup="Why don't pirates travel on mountain roads?" 
                        punchline="Scurvy."
                        upvotes={2}
                        downvotes={12}
                        comments={['good one', 'kkkkk', 'hahahaha']}
                        isPun={false}
                    />
                    <Joke 
                        setup="Why do bees stay in the hive in the winter?" 
                        punchline="Swarm."
                        upvotes={8}
                        downvotes={8}
                        comments={['good one', 'kkkkk', 'hahahaha']}
                        isPun={true}
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}