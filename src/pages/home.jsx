import Head from 'next/head';
import {
  Anchor,
  Avatar,
  Box,
  Footer,
  Heading,
  Nav,
  Paragraph,
} from "grommet";

import { Github, Slack } from "grommet-icons";
import styles from '../styles/Home.module.css';

// import Api from "../libs/Api.js";

export default function Home() {
  const gravatarLink = "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";

  async function getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org"> EmEarthquakeAh</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

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

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  
    <Box
      flex
      margin={{ horizontal: "auto" }}
      width={{ max: "xlarge" }}
      height={{ min: "100%" }}
      width={{ max: "xlarge" }}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box flex role="main" pad={{ vertical: "large" }}>
        <Heading>
          Welcome to <Anchor href="https://nextjs.org">Next.js</Anchor> and{" "}
          <Anchor href="https://v2.grommet.io">Grommet!</Anchor>
        </Heading>

        <Paragraph fill>
          This application is a boilerplate for using Next.js Framework, React
          library and the Grommet Component Library.
        </Paragraph>

        <Paragraph fill>
          The application and the page you are currently viewing is the
          default page that is created after bootstrapping a Next.js with{" "}
          <Anchor href="https://nextjs.org/docs/api-reference/create-next-app">
            Create Next App
          </Anchor>
          .
        </Paragraph>

        <Paragraph fill>
          To the default Create Next App application we added the grommet
          dependency, and replaced the HTML tags with actual grommet
          components, as a result you are viewing the same default page, with
          only Grommet components.
        </Paragraph>

        <Paragraph fill>
          Feel free to shoot the Grommet team any feedback and questions by
          using this page footer contact info.
        </Paragraph>

        <Paragraph fill>
          Get started by editing <code>pages/index.js</code>
        </Paragraph>

        <Box>
          <Anchor href="https://nextjs.org/docs">
            <Heading level={3}>Documentation &rarr;</Heading>
          </Anchor>
          <Paragraph>
            Find in-depth information about Next.js features and API.
          </Paragraph>

          <Anchor href="https://nextjs.org/learn">
            <Heading level={3}>Learn &rarr;</Heading>
          </Anchor>
          <p>Learn about Next.js in an interactive course with quizzes!</p>

          <Anchor href="https://github.com/vercel/next.js/tree/master/examples">
            <Heading level={3}>Examples &rarr;</Heading>
          </Anchor>
          <Paragraph>
            Discover and deploy boilerplate example Next.js projects.
          </Paragraph>

          <Anchor href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <Heading level={3}>Deploy &rarr;</Heading>
          </Anchor>
          <Paragraph>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </Paragraph>
        </Box>

        <Anchor
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js Powered by Vercel
        </Anchor>
      </Box>
      <Footer
        background="light-2"
        pad={{ vertical: "small", horizontal: "medium" }}
      >
        <Anchor href="https://github.com/ShimiSun">
          <Avatar src={gravatarLink} />
        </Anchor>
        <Nav direction="row" align="center">
          <Anchor
            a11yTitle="Reach out to the Grommet Community on Slack"
            href="https://slack-invite.grommet.io/"
            icon={<Slack color="plain" />}
            target="_blank"
            rel="noreferrer noopener"
          />
          <Anchor
            a11yTitle="Github repository"
            href="https://github.com/grommet/nextjs-boilerplate"
            icon={<Github color="black" />}
            target="_blank"
            rel="noreferrer noopener"
          />
        </Nav>
      </Footer>
    </Box>
    </>
  );
}
