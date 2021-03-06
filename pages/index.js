import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
   
      </Head>
    <Header />
    <section id="hero" className={styles.hero} className={styles.container}>
        <div className={styles["hero-info"]}>
            <p className={styles.h1} className={styles["hero-info-heading"]}>My Web<br />Wei Leng Yeh</p>
            <p class={styles["hero-info-subheading"]}>I am an freshman</p>
            
        </div>
        <div class={styles["hero-img"]}>
            <img className={styles.img} src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1623699351/8_045e82addc.jpg" alt="" />
        </div>
    </section>
    <Footer />
    </div>
  )
}
