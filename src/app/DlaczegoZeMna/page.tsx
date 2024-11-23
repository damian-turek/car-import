import {PageWrapper, WhyMe } from '@/app/components'

import styles from "../page.module.scss";
export default function Home() {
    return (
        <div className={styles.page}>
            <main>
                <PageWrapper>
                    <WhyMe/>
                </PageWrapper>
            </main>
        </div>
    );
}