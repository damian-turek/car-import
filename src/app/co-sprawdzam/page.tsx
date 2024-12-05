import {CarServices, CarVerification, PageWrapper } from '@/app/components'

import styles from "../page.module.scss";
export default function Home() {
    return (
        <div className={styles.page}>
            <main>
                <PageWrapper>
                    <CarServices/>
                    <CarVerification/>
                </PageWrapper>
            </main>
        </div>
    );
}