
import Header from '../../components/Header'
import Footer from '../../components/Footer';

import Contacts from '../../components/challenges/c2/Contact';

export default function ChallengeTwo(){
    document.body.classList.add('bg-gray-100');

    return(
        <> 
            <Header />
            <div className="flex flex-wrap gap-6 max-w-[600px] justify-center mx-auto pt-8 pb-16">
                <Contacts
                    img="src/assets/img/challenges/c2/mr-whiskerson.png"
                    name="Mr. Whiskerson"
                    phone="(212) 555-1234"
                    email="mr.whiskaz@catnap.meow"
                />
                <Contacts 
                    img="src/assets/img/challenges/c2/fluffykins.png"
                    name="Fluffykins"
                    phone="(212) 555-2345"
                    email="fluff@me.com"
                />
                <Contacts 
                    img="src/assets/img/challenges/c2/felix.png"
                    name="Felix"
                    phone=" (212) 555-4567"
                    email="thecat@hotmail.com"
                />
                <Contacts 
                    img="src/assets/img/challenges/c2/pumpkin.png"
                    name="Pumpkin"
                    phone="(0800) CAT KING"
                    email="pumpkin@scrimba.com"
                />
            </div>
            <p className="font-semibold text-center pb-12">This page <span className="font-bold">IS</span> responsive</p>
            <Footer />

        </>
    )
}