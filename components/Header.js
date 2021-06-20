import Link from 'next/link';
import styles from '../styles/Header.module.css';
export default function Header() {
  return (
    <div className={styles.navbar}>
            <a href="/"><img src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1623742194/sun_f07eba8f70.svg" className={styles.logo} /></a>
            <ul>
                <li className={styles.li}><a className={styles.a} href="/project/meals">projrct</a></li>
                <li className={styles.li}><a className={styles.a} href="/cards/cards">cards</a></li>
            </ul>
        </div>
  );
}

