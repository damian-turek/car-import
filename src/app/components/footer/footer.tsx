import React from 'react'
import WhatsApp from '../../../images/icons/whatsapp.svg'
import Phone from '../../../images/icons/phone.svg'

import styles from "./footer.module.scss"
import Image from 'next/image'
import Link from 'next/link'

export const Footer: React.FC = () => (
    <footer className={styles.footer}>
        <div className={styles.page}>
            <h2>Skontaktuj się ze mną</h2>
            <Link className={styles.link} href="/kontakt">Formularz zamówieniowy</Link>

            <div className={styles.contact}>
                <a href="tel:4917672434997">
                    <Image
                        src={Phone}
                        width={30}
                        height={30}
                        alt="Phone"
                    />
                    +49 176 724 34 997
                </a>
                <a href="tel:4917672434997">
                    <Image
                        src={WhatsApp}
                        width={40}
                        height={40}
                        alt="WhatsApp"
                    />
                    +49 176 724 34 997
                </a>
            </div>
            <div className={styles.privacyPolicy}>
                <p>
                    Na tej stronie używamy ciasteczek aby poprawić jej użyteczność. Jeśli chcesz dowiedzieć się więcej
                    na
                    ten temat wejdź do na stronę z
                    <a href="#"> Polityką prywatności.</a>
                </p>
                <p>
                    Copyright © {new Date().getFullYear()} Wszelkie prawa zastrzeżone.
                </p>
            </div>
        </div>
    </footer>
)