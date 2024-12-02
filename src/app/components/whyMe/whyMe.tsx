import React from 'react'
import Image from 'next/image'

import styles from "./whyMe.module.scss"

import Bartek from "../../../images/bartek-zdjecie.jpeg"

export const WhyMe: React.FC = () => (
    <div>
        <div className={styles.whyMe}>
            <div>
            <h3 className={styles.subtitle}>Dlaczego ze mną?</h3>
                <ul className={styles.list}>
                    <li><span>&#10004;</span> pasja od dzieciństwa</li>
                    <li><span>&#10004;</span> 20 lat doświadczenia w handlu samochodami</li>
                    <li><span>&#10004;</span> znajomość realiów rynków niemieckojęzycznych jak i perfekcyjna znajomość języka niemieckiego</li>
                    <li><span>&#10004;</span> cała transakcja jest obsługiwana wyłącznie przeze mnie (każde auto jest osobiście przeze mnie weryfikowane i sprawdzane)</li>
                    <li><span>&#10004;</span> informowanie klientów na każdym etapie</li>
                    <li><span>&#10004;</span> znajomość nowych technologii</li>
                </ul>
            </div>
            <Image
                src={Bartek}
                alt="Bartek"
            />
        </div>
        <p className={styles.description}>Motoryzacja od zawsze była moją pasją, dlatego postanowiłem zająć się nią zawodowo. Wnikliwa obserwacja rynku pozwoliła mi dojść do wniosku, że niemieckie auta używane wciąż cieszą się u nas zasłużoną popularnością. Wychodząc naprzeciw potrzebom osób, które chcą kupić samochód od naszych zachodnich sąsiadów, oferuję kompleksową usługę sprowadzenia wybranego pojazdu na preferencyjnych warunkach. Używane auta z Niemiec to modele renomowanych marek, utrzymane w naprawdę dobrym stanie technicznym. Całym przebiegiem transakcji zajmuję się osobiście, sprawdzając ogólne informacje o pojeździe, jego karoserię, jakość wyposażenia, a także stan silnika, szyb, oświetlenia, kół i ogumienia. Nadzoruję przeprowadzanie kontroli podwozia. Samochody wyróżniają się doskonałymi parametrami, co dodatkowo weryfikuję, odbywając jazdę próbną. Doskonale orientuję się w realiach rynków niemieckojęzycznych. Zaufało mi wielu klientów, którzy z moją pomocą kupili wymarzone auta używane z Niemiec.</p>
    </div>
)