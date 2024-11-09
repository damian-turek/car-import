import styles from "./page.module.scss";
import { Hero, WhyMe, Wrapper, CarServices, ActionSteps, Gallery } from '@/app/components'

export default async function Home() {

    return (
        <div className={styles.page}>
            <main>
                <Hero/>
                <Wrapper>
                    <Gallery/>
                    <WhyMe/>
                    <CarServices/>
                    <ActionSteps/>
                </Wrapper>
            </main>
        </div>
    )
}
