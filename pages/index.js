import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Right Angle Engineering – Automating the solar industry</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <header>
          <div>
            <Link href="/">
              <div>
                <Image
                  src="/rae-logo.svg"
                  alt="right angle engineering logo"
                  width={45}
                  height={45}
                />
                <Image
                  src="/rae-text-logo.svg"
                  alt="right angle engineering text logo"
                  width={125}
                  height={50}
                />
              </div>
            </Link>
            <button>Log In</button>
            <button>Get Started</button>
          </div>
        </header>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className="adress">
          <Image
            src="/rae-logo.svg"
            alt="right angle engineering logo"
            width={40}
            height={40}
          />
          <div>
            (252) 590-4141
            <br />
            580 E Technology Ave
            <br />
            Suite C1500
            <br />
            Orem, UT 84097
          </div>
        </div>
        <div>
          <div>
            <Link href="/">
              <a>Privacy</a>
            </Link>
            <Link href="/">
              <a>Terms</a>
            </Link>
            <Link href="/">
              <a>Contact Us</a>
            </Link>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=100075879137478">
              Facebook icon
            </a>
            <a href="https://www.instagram.com/rightangleengineering">
              Instagram icon
            </a>
            <a href="https://twitter.com/RightAngleEng">Twitter icon</a>
            <a href="https://www.linkedin.com/company/right-angle-engineering">
              LinkedIn icon
            </a>
          </div>
          <div>©2022 Right Angle Engineering, LLC. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
