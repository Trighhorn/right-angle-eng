import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCog,
  faHome,
  faLongArrowAltUp,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="home-page">
      <Head>
        <title>Right Angle Engineering – Automating the solar industry</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <header>
          <div className="header bg-slate bg-opacity-90 border-b-2 border-offslate flex h-24">
            <Link href="/" className="">
              <div className=" grow flex pl-50">
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
            <div className="flex">
              <button className=" bg-white text-black rounded-md">
                Get Started
              </button>
              <button className="text-white">Log In</button>
            </div>
          </div>
        </header>
        <div className="homepage">
          <div className="panel-one relative flex justify-center h-screen items-center overflow-hidden mb-12">
            <video
              autoPlay
              loop
              muted
              className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            >
              <source src="homevideo.webm" type="video/webm" />
            </video>
            <div className="panel-one-text flex flex-col justify-center items-center relative z-30 p-5 text-2xl font-bold text-white bg-slate bg-opacity-25 w-full h-full">
              <h1 className="text-7xl w-full flex flex-col justify-center items-center">
                CAD & Engineering
                <div className="type-home text-orange" />
              </h1>
              <h5 className="flex w-1/2 text-center font-normal ">
                We&apos;re bringing the solar industry into the modern era by
                revolutionizing the solar permitting process to be simple and
                efficient
              </h5>
              <button className="bg-white text-black rounded-md font-normal text-sm w-48 h-12">
                Request a demo
              </button>
            </div>
          </div>
          <div className="panel-two">
            <h2>We Handle it all.</h2>
            <div className="card-container">
              <div className="card">
                <div className="cad-card">
                  <h5>CAD</h5>
                  <FontAwesomeIcon icon={faHome} className="text-orange"/>
                  <div>
                    Our Solar Permit Designs include the cover sheet, site &
                    roof plan, string layout, attachment detail, and equipment
                    data sheets.
                  </div>
                </div>
                <div className="eng-card">
                  <h5>Engineering</h5>
                  <FontAwesomeIcon icon={faCog} className="text-orange"/>
                  <div>
                    Our PE’s are licensed in all 50 states. We have you covered,
                    from special inspection forms, to post install visits, and
                    everything in between.
                  </div>
                </div>
                <div className="Int-card">
                  <h5>Intergrations</h5>
                  <FontAwesomeIcon icon={faLongArrowAltUp} className="text-orange"/>
                  <div>
                    Our development team is in place to fully integrate into
                    your current system, and eliminate the common pain points
                    associated with engineering.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-three">
            <h1>Fast an intuitive</h1>
            <div>
              Creating a new job is quick and painless with our job form, via a
              simple set of steps that guides you through providing your job
              information. We make it easy to upload your job files either
              directly from your computer or via our built-in third party file
              storage integrations.
            </div>
            <Image
              src="/raetruss.png"
              alt="right angle engineering truss software photo"
              width={951}
              height={677}
            />
          </div>
          <div className="panle-four">
            <h1>All the info you need</h1>
            <div>
              We handle everything about your job, and display it all in a clean
              and easy to understand interface. You can also message with your
              company and our internal team about your job, and review uploaded
              job files.
            </div>
            <Image
              src="/raejobs.png"
              alt="right angle engineering jobs software photo"
              width={951}
              height={677}
            />
          </div>
          <div className="panel-five">
            <Image
              src="/rae-logo-color.svg"
              alt="right angle engineering logo with color"
              width={85}
              height={85}
            />
            <h3>Request a demo today.</h3>
            <button>get started</button>
          </div>
        </div>
      </main>

      <footer className="w-full flex flex-col">
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
            <Link href="/privacy">
              <a>Privacy</a>
            </Link>
            <Link href="/terms">
              <a>Terms</a>
            </Link>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=100075879137478">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="https://www.instagram.com/rightangleengineering">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a href="https://twitter.com/RightAngleEng">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/company/right-angle-engineering">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div>©2022 Right Angle Engineering, LLC. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
