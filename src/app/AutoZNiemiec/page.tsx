import { WhyFromGermany, Wrapper } from '@/app/components'

import styles from "../page.module.scss";
export default function Home() {
    return (
        <div className={styles.page}>
            <main>
                <Wrapper>
                    <WhyFromGermany/>
                </Wrapper>
            </main>
        </div>
    );
}