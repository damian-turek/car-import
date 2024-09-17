import styles from "./page.module.scss";
import { Header, Footer, Hero } from '@/app/components'

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <main>
        <Hero/>
      </main>
      <Footer/>
    </div>
  );
}
