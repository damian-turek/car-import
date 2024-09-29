import React from 'react'
import Image from 'next/image'

import Car from "../../../images/samochod.jpeg"

import styles from "./whyFromGermany.module.scss"

export const WhyFromGermany: React.FC = () => (
    <div className={styles.page}>
        <h3>Dlaczego auto z Niemiec?</h3>
        <p>
            Renomowana firma sprowadzająca auta z Niemiec wychodzi naprzeciw oczekiwaniom osób, które chcą kupić używany samochód wysokiej klasy. Pomagamy w nabyciu wymarzonego pojazdu. Z naszym wsparciem możesz sprowadzić pojazdy marki Fiat, Opel, Passat lub Audi/. Warto zdecydować się na auto od naszych zachodnich sąsiadów, ponieważ zazwyczaj są to samochody w bardzo dobrym stanie technicznym, nierzadko posiadające nowoczesne wyposażenie. Za zachodnią granicą drogi są w znacznie lepszym stanie, co dodatkowo wpływa na ogólny stan pojazdu. Niemcy nie oszczędzają na regularnym serwisowaniu, czego dowodem jest w pełni udokumentowany przebieg.
        </p>
        <div className={styles.imageLayout}>
            <ul className={styles.list}>
                <li><span>&#10004;</span> dużo większy wybór aut - ponad 45 mln zarejestrowanych samochodów</li>
                <li><span>&#10004;</span> auta mocno uszkodzone rzadko poddawane są naprawie gdyż jest to nieopłacalne</li>
                <li><span>&#10004;</span> auta z Niemiec często maja dużo lepsze wyposażenie</li>
                <li><span>&#10004;</span> stan dróg w Niemczech nadal jest dużo lepszy niż w Polsce, co realnie przekłada się na ogólny stan samochodu</li>
                <li><span>&#10004;</span> Niemcy regularnie serwisują swoje samochody i rzadko na tym oszczędzają</li>
                <li><span>&#10004;</span> duża większość aut posiada w pełni udokumentowany przebieg</li>
            </ul>
            <Image
                src={Car}
                alt="car"
                width={600}
            />
        </div>
    </div>
)