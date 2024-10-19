import styles from "./page.module.scss";
import { CarVerification, Header, Footer, Hero, WhyMe, Wrapper, WhyFromGermany, ActionSteps } from '@/app/components'

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
                    <ActionSteps/>
                </Wrapper>
            </main>
            <Footer/>
        </div>
    )
}
