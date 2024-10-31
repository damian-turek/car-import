import { WhyMe, Wrapper } from '@/app/components'

import styles from "../page.module.scss";
export default function Home() {
    return (
        <div className={styles.page}>
            <main>
                <Wrapper>
                    <WhyMe/>
                </Wrapper>
            </main>
        </div>
    );
}