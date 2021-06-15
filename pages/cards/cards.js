// import Head from 'next/head'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from '../../styles/cards.module.css'

export default function Home() {
  return (
    <div>
        <Head>
            <link rel="stylesheet icon" type="" src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1623742194/sun_f07eba8f70.svg" />
            <title>i am sunshine girl</title>
          </Head>
        <Header />
        <div className={styles.container}>
        <div className={styles.card} >
            <div className={styles.card1}>
              <img className={styles.img} src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1623665578/small_pexels_mark_stebnicki_2714463_91a15aaba9.jpg" />
            </div>
            <div className={styles.card2}>
              <button className={styles.button}>
                  <h1 className={styles.h1} >Apple</h1>
              </button>
            </div>
          </div>
        <div className={styles.card} >
            <div className={styles.card1}>
              <img className={styles.img} src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1623665571/pexels_laker_6157031_f4a84602bf.jpg" />
            </div>
            <div className={styles.card2}>
              <button className={styles.button}>
                  <h1 className={styles.h1} >Avocado</h1>
              </button>
            </div>
          </div>
        <div className={styles.card} >
            <div className={styles.card1}>
              <img className={styles.img} src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1623665570/pexels_any_lane_5945725_ae6e846e01.jpg" />
            </div>
            <div className={styles.card2}>
              <button className={styles.button}>
                  <h1 className={styles.h1} >Papaya</h1>
              </button>
            </div>
          </div>
        <div className={styles.card} >
            <div className={styles.card1}>
              <img className={styles.img} src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1623665570/pexels_ylanite_koppens_915017_703ba4d86b.jpg" />
            </div>
            <div className={styles.card2}>
              <button className={styles.button}>
                  <h1 className={styles.h1} >Pineapple</h1>
              </button>
            </div>
          </div>

        </div>
        
        
        
        
        <Footer />
    </div>
  )
}
