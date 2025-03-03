import Header from '../../components/Header'
import Footer from '../../components/Footer'

import globeIcon from '../../assets/challenges/c4/globe.png' 
import Component from '../../components/challenges/Journal'

import fuuji from '../../assets/challenges/c4/fuuji.jpeg'
import sydney from '../../assets/challenges/c4/Sydney.jpeg'
import Geirangerfjord from '../../assets/challenges/c4/Geirangerfjord.jpeg'

export default function ChallengeFour(){
    document.body.classList.remove('bg-bgMain')
    document.body.classList.add('bg-gray-100')

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
                    <div className=''>
                        <Component 
                            img={fuuji}
                            country="Japan"
                            mapLink="#"
                            location="Mount Fuji"
                            date="12 Jan, 2023 - 24 Jan, 2023"
                            content="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
                                Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
                        />
                        <Component 
                            img={sydney}
                            country="Australia"
                            link="#"
                            location="Sydney Opera House"
                            date="27 May, 2023 - 8 Jun, 2023"
                            content="The Sydney Opera House is a multi-venue performing arts centre in Sydney. 
                                Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
                        />
                        <Component 
                            img={Geirangerfjord}
                            country="Geirangerfjord"
                            link="#"
                            location="Sydney Opera House"
                            date="01 Oct, 2024 - 18 Nov, 2024"
                            content="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
                        />
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}