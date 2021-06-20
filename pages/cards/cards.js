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
        <div className={styles.outside}>
          <div className={styles.container}>
          <div className={styles.card} >
              <div className={styles.card1}>
                <img className={styles.img} src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1624182827/fontcoolnew_443c911a21.png" />
              </div>
              <div className={styles.card2}>
                <button className={styles.button}>
                    <h1 className={styles.h1} >cool font</h1>
                </button>
              </div>
            </div>
          <div className={styles.card} >
              <div className={styles.card1}>
                <img className={styles.img} src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1624181781/large_itsmylife_31cebe427f.png" />
              </div>
              <div className={styles.card2}>
                <button className={styles.button}>
                    <h1 className={styles.h1} >My web</h1>
                </button>
              </div>
            </div>
          <div className={styles.card} >
              <div className={styles.card1}>
                <img className={styles.img} src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1624181783/ox_cb73853f3d.png" />
              </div>
              <div className={styles.card2}>
                <button className={styles.button}>
                    <h1 className={styles.h1} >ox</h1>
                </button>
              </div>
            </div>
          <div className={styles.card} >
              <div className={styles.card1}>
                <img className={styles.img} src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1624181780/tku_c317df4b65.png" />
              </div>
              <div className={styles.card2}>
                <button className={styles.button}>
                    <h1 className={styles.h1} >Tku</h1>
                </button>
              </div>
            </div>
          <div className={styles.card} >
              <div className={styles.card1}>
                <img className={styles.img} src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1624181771/small_Dev_5a4ce45fa0.png" />
              </div>
              <div className={styles.card2}>
                <button className={styles.button}>
                    <h1 className={styles.h1} >Dev</h1>
                </button>
              </div>
            </div>
          <div className={styles.card} >
              <div className={styles.card1}>
                <img className={styles.img} src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1624181765/usacards_b1761692d9.png" />
              </div>
              <div className={styles.card2}>
                <button className={styles.button}>
                    <h1 className={styles.h1} >Country card</h1>
                </button>
              </div>
            </div>
          <div className={styles.card} >
              <div className={styles.card1}>
                <img className={styles.img} src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1624181746/large_Micro_e35f528ef9.png" />
              </div>
              <div className={styles.card2}>
                <button className={styles.button}>
                    <h1 className={styles.h1} >Micro</h1>
                </button>
              </div>
            </div>
          <div className={styles.card} >
              <div className={styles.card1}>
                <img className={styles.img} src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1624181740/monster_d94c4a820c.png" />
              </div>
              <div className={styles.card2}>
                <button className={styles.button}>
                    <h1 className={styles.h1} >Monster</h1>
                </button>
              </div>
            </div>
          <div className={styles.card} >
              <div className={styles.card1}>
                <img className={styles.img} src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1624181739/guess_a76f5ddc8e.png" />
              </div>
              <div className={styles.card2}>
                <button className={styles.button}>
                    <h1 className={styles.h1} >Guess</h1>
                </button>
              </div>
            </div>
          <div className={styles.card} >
              <div className={styles.card1}>
                <img className={styles.img} src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1624181737/clickme_7430d63d74.png" />
              </div>
              <div className={styles.card2}>
                <button className={styles.button}>
                    <h1 className={styles.h1} >Click</h1>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.words}>
            <p className={styles.w}>this</p>
            <p className={styles.w}>is</p>
            <p className={styles.w}>my</p>
            <p className={styles.w}>Portfolio</p>
          </div>
        </div>
        
        
        
        
        <Footer />
    </div>
  )
}
