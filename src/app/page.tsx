import styles from "./page.module.scss";
import { Header, Footer } from '@/app/components'

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <main>
        main
      </main>
      <Footer/>
    </div>
  );
}
