export default function StaticPageCards(){
    return(
        <>
            <div className="flex flex-col gap-4 lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:justify-items-center">
                <a href="c1" className="card-style group bg-[url(/src/assets/img/challenges/c1Blur.png)] hover:opacity-85 hover:bg-[url(/src/assets/img/Challenges/c1NoBlur.png)]">
                    <span className="group-hover:underline absolute bottom-6 left-5 text-gray-50 text-2xl font-semibold">Challenge One / React Facts</span>
                </a>
                <a href="c1" className="card-style group bg-[url(/src/assets/img/challenges/c1Blur.png)] hover:opacity-85 hover:bg-[url(/src/assets/img/Challenges/c1NoBlur.png)]">
                    <span className="group-hover:underline absolute bottom-6 left-5 text-white text-2xl font-semibold">Challenge Two</span>
                </a>                            
                <a href="c1" className="card-style group bg-[url(/src/assets/img/challenges/c1Blur.png)] hover:opacity-85 hover:bg-[url(/src/assets/img/Challenges/c1NoBlur.png)]">
                    <span className="group-hover:underline absolute bottom-6 left-5 text-white text-2xl font-semibold">Challenge Three</span>
                </a>
            </div>
        </>
    )
}