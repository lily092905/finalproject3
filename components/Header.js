import Link from 'next/link';
import styles from '../styles/Header.module.css';
export default function Header() {
  return (
    <div className={styles.navbar}>
            <img src="./img/sun.svg" className={styles.logo} />
            <ul>
                <li className={styles.li}><a className={styles.a} href="#">Product</a></li>
                <li className={styles.li}><a className={styles.a} href="#">About</a></li>
                <li className={styles.li}><a className={styles.a} href="#">Conduct</a></li>
            </ul>
        </div>
  );
}