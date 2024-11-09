import styles from "./header.module.scss"
import Link from 'next/link'
import React from 'react'

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.page}>
                <Link href="/" className={styles.logo}>
                    Bartek-Auta.pl
                </Link>
                <nav>
                    <Link href="/DlaczegoZeMna">Dlaczego ze mną?</Link>
                    <Link href="/AutoZNiemiec">Dlaczego auto z Niemiec?</Link>
                    <Link href="/CoSprawdzam">Co sprawdzam?</Link>
                    <Link href="/Kontakt">Kontakt</Link>
                </nav>
            </div>
        </header>
    );
}
