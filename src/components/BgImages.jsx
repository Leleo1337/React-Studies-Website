import bgImage from '../assets/bgImage.webp'
import bgMoba from '../assets/bgMoba.webp'

export default function Images(){
    return(
        <>
            <div className='absolute t-0 w-full h-[78vh] -z-3 hidden sm:block'><img src={bgImage} className='w-full h-full opacity-5' /></div>
            <div className='absolute t-0 w-full h-[78vh] block sm:hidden'><img src={bgMoba} className='w-full h-full opacity-5 -z-1' /></div>
            <div className='absolute w-full h-[78vh] block sm:hidden'><img src={bgMoba} className='rotate-y-180 w-full h-full opacity-5 -z-1' /></div>
        </>
    )
}