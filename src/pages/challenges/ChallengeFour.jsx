import Header from '../../components/Header'
import Footer from '../../components/Footer'

import globeIcon from '../../assets/challenges/c4/globe.png' 
import JournalComponent from '../../components/challenges/c4/Journal'
import journalData from '../../assets/challenges/c4/journalData.js'
import { useEffect } from 'react'


export default function ChallengeFour(){
    const Journals = journalData.map(data => {
        return <JournalComponent
         key={data.id}
         contentData={data}
         />
    })
    useEffect(() => {
        document.body.classList.add('bg-gray-100')

        return () => {
            document.body.classList.remove('bg-gray-100')
        }
    }, [])

    return(
        <>
            <Header /> {/*page header */}
            
            <div className='px-2 mt-8 sm:px-6 md:px-10'>
                <header className='py-3 mx-auto bg-red-400 md:container md:max-w-[900px] rounded-t-md shadow-xl'> {/** challenge header */}
                    <div className='flex items-center justify-center gap-2'>
                        <img src={globeIcon} alt="Globe Icon" className='w-8' />
                        <h2 className='font-semibold text-white'>My travel journal</h2>
                    </div>
                </header>
                <main className='px-6 py-4 mx-auto mb-20 bg-white md:container md:max-w-[900px] rounded-b-md shadow-xl'>
                    <div>
                        {Journals}
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}