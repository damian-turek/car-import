import styles from "./header.module.scss"
import Link from 'next/link'
import React from 'react'

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.page}>
                <Link href="#" className={styles.logo}>
                    {/*<Image*/}
                    {/*    src={}*/}
                    {/*    alt="logo"*/}
                    {/*    width={10}*/}
                    {/*    height={10}*/}
                    {/*/>*/}
                    Bartek-Auta.pl
                </Link>
                <nav>
                    <Link href="#">Dlaczego auto z Niemiec?</Link>
                    <Link href="#">Jak to działa?</Link>
                    <Link href="#">Dlaczego ze mną?</Link>
                    <Link href="#">Co sprawdzam?</Link>
                    <Link href="#">Weryfikacja samochodu</Link>
                    <Link href="#">Opinie</Link>
                    <Link href="#">Galeria</Link>
                    <Link href="#">Kontakt</Link>
                </nav>
            </div>
        </header>
    );
}
