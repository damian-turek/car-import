'use client'

import React, { useState } from "react";
import Link from "next/link";

import styles from './hamburgerMenu.module.scss'

export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.hamburger} onClick={toggleMenu}>
            <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
            <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
            <div className={`${styles.bar} ${isOpen ? styles.open : ''}`}></div>
            {isOpen && (
                <div className={styles.menu}>
                    <Link href="/DlaczegoZeMna" className={styles.menuItem}>Dlaczego ze mną?</Link>
                    <Link href="/AutoZNiemiec" className={styles.menuItem}>Dlaczego auto z Niemiec?</Link>
                    <Link href="/CoSprawdzam" className={styles.menuItem}>Co sprawdzam?</Link>
                    <Link href="/Kontakt" className={styles.menuItem}>Kontakt</Link>

                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
