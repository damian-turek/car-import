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
                    <Link className={styles.navItem} href="/DlaczegoZeMna">Dlaczego ze mną?</Link>
                    <Link className={styles.navItem} href="/AutoZNiemiec">Dlaczego auto z Niemiec?</Link>
                    <Link className={styles.navItem} href="/CoSprawdzam">Co sprawdzam?</Link>
                    <Link className={styles.navItem} href="/Kontakt">Kontakt</Link>
                    <HamburgerMenu/>
                </nav>
            </div>
        </header>
    );
}
