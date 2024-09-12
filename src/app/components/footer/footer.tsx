import React from 'react'

import styles from "./footer.module.scss"

export const Footer: React.FC = () => (
    <footer className={styles.footer}>
        <div className={styles.page}>
            <h2>Skontaktuj się ze mną</h2>
            <button>Formularz zamówieniowy</button>

            <div className={styles.contact}>
                <a href="tel:4917672434997">Telefon: +49 176 724 34 997</a><a href="tel:4917672434997"> WhatsApp: +49 176 724 34 997</a>
            </div>
            <div className={styles.privacyPolicy}>
                <p>
                    Na tej stronie używamy ciasteczek aby poprawić jej użyteczność. Jeśli chcesz dowiedzieć się więcej
                    na
                    ten temat wejdź do na stronę z
                    <a href="#"> Polityką prywatności.</a>
                </p>
                <p>
                    Copyright ©{new Date().getFullYear()} Wszelkie prawa zastrzeżone.
                </p>
            </div>
        </div>
    </footer>
)