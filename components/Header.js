import Link from 'next/link';
import styles from '../styles/Header.module.css';
export default function Header() {
  return (
    <div className={styles.navbar}>
            <img src="https://res.cloudinary.com/dxbvrsg5b/image/upload/v1623701401/small_sun_57d00d52ab.png" className={styles.logo} />
            <ul>
                <li className={styles.li}><a className={styles.a} href="#">projrct</a></li>
                <li className={styles.li}><a className={styles.a} href="#">cards</a></li>
                <li className={styles.li}><a className={styles.a} href="#">Conduct</a></li>
            </ul>
        </div>
  );
}