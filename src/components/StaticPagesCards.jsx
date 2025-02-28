import cardShadow from '../assets/img/card-shadow.png'

export default function StaticPageCards(){
    return(
        <>
            <div className="flex flex-col gap-4 lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:justify-items-center px-12">
                <a href="c1" className="card-style group bg-[url(/src/assets/img/challenges/c1/c1Blur.png)] opacity-50 hover:opacity-70 hover:bg-[url(/src/assets/img/challenges/c1/c1NoBlur.png)]">
                    <span className="group-hover:underline absolute bottom-6 left-5 text-gray-50 text-2xl font-semibold z-10">Challenge One / React Facts</span>
                    <img src={cardShadow} alt="image shadow" className="absolute bottom-0 h-20 z-1 rounded-b-xl" />
                </a>
                <a href="c2" className="card-style group bg-[url(/src/assets/img/challenges/c2/HomePage/c2blur.png)] opacity-50 hover:opacity-70 hover:bg-[url(/src/assets/img/challenges/c2/HomePage/c2NoBlur.png)]">
                    <span className="group-hover:underline absolute bottom-6 left-5 text-white text-2xl font-semibold z-10">Challenge Two / Contacts</span>
                    <img src={cardShadow} alt="image shadow" className="absolute bottom-0 h-20 z-1 rounded-b-xl" />
                </a>
                <a href="c1" className="card-style group bg-[url(/src/assets/img/challenges/c3/c3Blur.png)] opacity-50 hover:opacity-70 hover:bg-[url(/src/assets/img/challenges/c3/c3NoBlur.png)]">
                    <img src={cardShadow}alt="image shadow" className="absolute bottom-0 h-20 z-1 rounded-b-xl" />
                    <span className="group-hover:underline absolute bottom-6 left-5 text-white text-2xl font-semibold z-10">Challenge Three</span>
                </a>   
            </div>
        </>
    )
}