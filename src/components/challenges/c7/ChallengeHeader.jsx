import trollFaceImg from '../../../assets/challenges/c7/trollFace.png'

export default function Header(){
    return(
        <>
            <header className='bg-purple-900 px-8 py-4 rounded-t-md'>
                <div className='flex items-center gap-4'>
                    <img src={trollFaceImg} alt="Troll face" className='w-11' />
                    <h1 className='text-white text-xl font-semibold'>Meme Generator</h1>
                </div>
            </header>
        </>
    )   
}