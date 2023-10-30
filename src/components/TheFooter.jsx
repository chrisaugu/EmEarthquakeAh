import React from 'react';
import {Footer, Anchor, Text} from "grommet";
import styles from "../styles/Home.module.css";

export default function TheFooter() {
  return (
    <Footer background="brand" pad="medium">
      {/*<Anchor
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
      </Anchor>*/}
      <Text>Made with ❤️ in Beautiful Madang</Text>
    </Footer>
  )
}