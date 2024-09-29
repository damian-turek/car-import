import styles from "./page.module.scss";
import { Header, Footer, Hero, WhyMe, Wrapper } from '@/app/components'

export default function Home() {
    return (
        <div className={styles.page}>
            <Header/>
            <main>
                <Hero/>
                <Wrapper>
                    <WhyMe/>

                </Wrapper>
            </main>
            <Footer/>
        </div>
    )
}
