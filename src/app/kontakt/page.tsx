import {Contact, PageWrapper } from '@/app/components'

import styles from "../page.module.scss";
export default function Home() {
    return (
        <div className={styles.page}>
            <main>
                <PageWrapper>
                    <Contact/>
                </PageWrapper>
            </main>
        </div>
    );
}