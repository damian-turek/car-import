import styles from "./page.module.scss";
import { Hero, WhyMe, Wrapper, CarServices, ActionSteps } from '@/app/components'

export default async function Home() {

    return (
        <div className={styles.page}>
            <main>
                <Hero/>
                <Wrapper>
                    <WhyMe/>
                    <CarServices/>
                    <ActionSteps/>
                </Wrapper>
            </main>
        </div>
    )
}
