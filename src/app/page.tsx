import styles from "./page.module.scss";
import { CarVerification, Header, Footer, Hero, WhyMe, Wrapper, WhyFromGermany, ActionSteps, CarServices } from '@/app/components'

export default async function Home() {

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
                    <CarServices/>
                </Wrapper>
            </main>
            <Footer/>
        </div>
    )
}
