import React from 'react'

import styles from "./actionSteps.module.scss"

export const ActionSteps: React.FC = () => (
    <div className={styles.page}>
        <h3 className={styles.subtitle}>Jak to działa?</h3>
        <section>
            <div>
                <span>1</span><p> po zgłoszeniu Klient otrzymuję w przeciągu 24h w dni robocze maksymalnie 3 oferty aut</p>
            </div>
            <div>
                <span>2</span><p> Po wybraniu przez klienta jednego z nich dokonuję telefonicznej weryfikacji</p>
            </div>
            <div>
                <span>3</span><p> W przypadku wstępnej decyzji klient otrzymuje pełną ofertę zakupu oraz ofertę sprowadzenia samochodu do Polski</p>
            </div>
            <div>
                <span>4</span><p> Przed oględzinami klient zobowiązany jest wpłacić zaliczkę od 200 PLN do 500 PLN, w zależności od odległości w jakiej znajduję się samochód</p>
            </div>
            <div>
                <span>5</span><p> Oględziny samochodu przeprowadzam osobiście, podczas których jestem w stałym kontakcie z klientem (klient otrzymuje aktualne zdjęcia z oględzin lub jeżeli jest to możliwe, łączę się poprzez komunikator <b>WhatsApp</b> lub <b>Skype</b> z klientem w celu prezentacji samochodu na żywo)</p>
            </div>
            <div>
                <span>6</span><p> Po akceptacji klienta oraz wpłaty przez niego minimum 90% ceny samochodu dokonuje zakupu ww.auta</p>
            </div>
            <div>
                <span>7</span><p> Po wcześniej omówionym transporcie samochód trafia do nowego właściciela</p>
            </div>
            <div>
                <span>8</span><p> Ostateczne zdanie zawsze należy do klienta</p>
            </div>
        </section>
    </div>
)