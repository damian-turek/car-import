import { Contact, Wrapper } from '@/app/components'

import styles from "../page.module.scss";
export default function Home() {
    return (
        <div className={styles.page}>
            <main>
                <Wrapper>
                    <Contact/>
                </Wrapper>
            </main>
        </div>
    );
}