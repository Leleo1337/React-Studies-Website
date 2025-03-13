import whiskersonImg from '../../assets/challenges/c2/mr-whiskerson.png'
import fluffykinsImg from '../../assets/challenges/c2/fluffykins.png'
import felixImg from '../../assets/challenges/c2/felix.png'
import pumpkinImg from '../../assets/challenges/c2/pumpkin.png'


import Header from '../../components/Header'
import Footer from '../../components/Footer';

import Contacts from '../../components/challenges/c2/Contact';

export default function ChallengeTwo(){
    document.body.classList.remove('bg-zinc-950')
    document.body.classList.add('bg-gray-100');

    return(
        <> 
            <Header />
            <div className="flex flex-wrap gap-6 max-w-[600px] justify-center mx-auto pt-8 pb-16">
                <Contacts
                    img={whiskersonImg}
                    name="Mr. Whiskerson"
                    phone="(212) 555-1234"
                    email="mr.whiskaz@catnap.meow"
                />
                <Contacts 
                    img={fluffykinsImg}
                    name="Fluffykins"
                    phone="(212) 555-2345"
                    email="fluff@me.com"
                />
                <Contacts 
                    img={felixImg}
                    name="Felix"
                    phone=" (212) 555-4567"
                    email="thecat@hotmail.com"
                />
                <Contacts 
                    img={pumpkinImg}
                    name="Pumpkin"
                    phone="(0800) CAT KING"
                    email="pumpkin@scrimba.com"
                />
            </div>
            <Footer />

        </>
    )
}