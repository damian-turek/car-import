import styles from "./page.module.scss";
import { CarVerification, Header, Footer, Hero, WhyMe, Wrapper, WhyFromGermany } from '@/app/components'

export default function Home() {
    return (
        <div className={styles.page}>
            <Header/>
            <main>
                <Hero/>
                <Wrapper>
                    <WhyMe/>
                    <CarVerification/>
                    <WhyFromGermany/>
                </Wrapper>
            </main>
            <Footer/>
        </div>
    )
}
