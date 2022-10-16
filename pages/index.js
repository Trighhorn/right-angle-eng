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
          <div className="header">
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
        <div className="homepage">
          <div classname="panel-one">
            <h1>
              CAD & Engineering
              <div className="Typewriter">Modernized</div>
            </h1>
            <h5>
              Were bringing the solar industry into the modern era by
              revolutionizing the solar permitting process to be simple and
              efficient
            </h5>
            <button>Request a demo</button>
          </div>
          <div className="panel-two">
            <h2>We Handle it all.</h2>
            <div className="card-container">
              <div className="card">
                <div className="cad-card">
                  <h5>CAD</h5>
                  <div>
                    Our Solar Permit Designs include the cover sheet, site &
                    roof plan, string layout, attachment detail, and equipment
                    data sheets.
                  </div>
                </div>
                <div className="eng-card">
                  <h5>Engineering</h5>
                  <div>
                    Our PE’s are licensed in all 50 states. We have you covered,
                    from special inspection forms, to post install visits, and
                    everything in between.
                  </div>
                </div>
                <div className="Int-card">
                  <h5>Intergrations</h5>
                  <div>
                    Our development team is in place to fully integrate into
                    your current system, and eliminate the common pain points
                    associated with engineering.
                  </div>
                </div>
              </div>
            </div>
          </div>
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
