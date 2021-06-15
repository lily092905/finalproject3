import Link from 'next/link';
import styles from '../styles/Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Wei Leng</p>
      <p>
        <Link href='/'>HomePage</Link>
      </p>
    </footer>
  );
}