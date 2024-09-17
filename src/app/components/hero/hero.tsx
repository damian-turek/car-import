import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import HeroImage from "../../../images/hero.jpg"

import styles from "./hero.module.scss"

export const Hero: React.FC = () => (
    <div className={styles.hero}>
        <div className={styles.motto}>
            <h2>Znajdź ze mną wymarzone auto</h2>
            <p>Zajmuję się sprowadzaniem samochodów z Niemiec od 15 lat. Zaufało mi ponad 120 klientów.</p>
            <Link href="#">
                <div className={styles.button}>Skontaktuj się ze mną</div>
            </Link>
        </div>
        <Image
            className={styles.image}
            src={HeroImage}
            alt="Hero"
            fill={true}
        />
    </div>
)