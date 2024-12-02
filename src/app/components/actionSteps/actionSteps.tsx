import React from 'react'

import styles from "./actionSteps.module.scss"

export const ActionSteps: React.FC = () => (
    <div className={styles.page}>
        <h3 className={styles.subtitle}>Jak to działa?</h3>
        <section>
            <div>
                <span>1</span><p> Po wybraniu danego egzemplarzu samochodu (kwota zakupu min 30.000 PLN) dokonuję szczegółowej weryfikacji telefonicznej</p>
            </div>
            <div>
                <span>2</span><p> Po pozytywnej weryfikacji telefonicznej umawiam termin oględzin w miejscu sprzedaży</p>
            </div>
            <div>
                <span>3</span><p> Przed oględzinami w miejscu sprzedaży klient zobowiązany jest zapłacić całość usługi</p>
            </div>
            <div>
                <span>4</span><p> Oględziny samochodu przeprowadzam osobiście, podczas których jestem w stałym kontakcie z klientem (klient otrzymuje aktualne zdjęcia z oględzin lub jeżeli jest to możliwe, łączę się poprzez komunikator <b>WhatsApp</b> lub <b>Skype</b> z klientem w celu prezentacji samochodu na żywo)</p>
            </div>
            <div>
                <span>6</span><p> Po akceptacji klienta dokonuję sporządzenia umowy kupna-sprzedaży</p>
            </div>
            <div>
                <span>7</span><p> Po wcześniej omówionym transporcie samochód trafia do nowego właściciela</p>
            </div>
        </section>
    </div>
)