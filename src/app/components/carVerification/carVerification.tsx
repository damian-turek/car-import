import React from 'react'
import styles from "./carVerification.module.scss"

export const CarVerification: React.FC = () => (
    <div className={styles.page}>
        <h2>Weryfikacja samochodu</h2>
        <p>Weryfikacja polega na:</p>
        <ul className={styles.list}>
            <li><span>&#10004;</span>osobistym sprawdzeniu samochodu w miejscu sprzedaży</li>
            <li><span>&#10004;</span>sprawdzeniu zewnętrznego jak i wewnętrznego stanu auta</li>
            <li><span>&#10004;</span>weryfikacji dokumentów auta</li>
        </ul>
        <p>
            Na życzenie Klienta dokonuje osobistej weryfikacji samochodu. Szczegółowa weryfikacje otrzymasz w formie kilku filmów oraz zdjęć które oddadzą faktyczny stan samochodu.
            W celu uzyskania szczegolowych informacji prosze o kontakt.
         </p>
    </div>
)