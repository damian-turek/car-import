import { CarServices, CarVerification, Wrapper } from '@/app/components'

import styles from "../page.module.scss";
export default function Home() {
    return (
        <div className={styles.page}>
            <main>
                <Wrapper>
                    <CarServices/>
                    <CarVerification/>
                </Wrapper>
            </main>
        </div>
    );
}