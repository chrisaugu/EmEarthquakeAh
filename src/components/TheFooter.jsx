import react from 'react';
import styles from "../styles/Home.module.css";

export default function TheFooter() {
  return (
    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
      </a>
      <br/>
      <br/>
      <br/>
      <span>Made with ❤️ in Beautiful Madang</span>
    </footer>
  )
}