import styles from "./header.module.scss"
import Link from 'next/link'
import React from 'react'
import {HamburgerMenu} from "../hamburgerMenu";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.page}>
                <Link href="/" className={styles.logo}>
                    Bartek-Auta.pl
                </Link>
                <nav>
                    <Link className={styles.navItem} href="/dlaczego-ze-mna">Dlaczego ze mną?</Link>
                    <Link className={styles.navItem} href="/dlaczego-auto-z-niemiec">Dlaczego auto z Niemiec?</Link>
                    <Link className={styles.navItem} href="/co-sprawdzam">Co sprawdzam?</Link>
                    <Link className={styles.navItem} href="/kontakt">Kontakt</Link>
                    <HamburgerMenu/>
                </nav>
            </div>
        </header>
    );
}
