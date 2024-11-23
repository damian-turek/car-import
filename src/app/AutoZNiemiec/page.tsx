import {PageWrapper, WhyFromGermany } from '@/app/components'

import styles from "../page.module.scss";
export default function Home() {
    return (
        <div className={styles.page}>
            <main>
                <PageWrapper>
                    <WhyFromGermany/>
                </PageWrapper>
            </main>
        </div>
    );
}