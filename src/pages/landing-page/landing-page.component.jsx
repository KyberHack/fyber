import React from "react";
import { Link } from "react-router-dom";
import logoDark from "../../assets/landing-page/images/logo-dark.svg";
import logoLight from "../../assets/landing-page/images/logo-light.svg";
import headerIllustrationLight from "../../assets/landing-page/images/header-illustration-light.svg";
import heroMediaIllustrationLight from "../../assets/landing-page/images/hero-media-illustration-light.svg";
import heroMediaLight from "../../assets/landing-page/images/hero-media-light.svg";
import featuresIllustrationLight from "../../assets/landing-page/images/features-illustration-light.svg";
import featuresBoxLight from "../../assets/landing-page/images/features-box-light.svg";
import featuresIllustrationTopLight from "../../assets/landing-page/images/features-illustration-top-light.svg";
import features01Light from "../../assets/landing-page/images/feature-01-light.svg";
import features02Light from "../../assets/landing-page/images/feature-02-light.svg";
import features03Light from "../../assets/landing-page/images/feature-03-light.svg";
import "../../assets/landing-page/css/style.css";

const LandingPage = () => (
  <div className="is-boxed">
    <div className="body-wrap boxed-container">
      <header className="site-header">
        <div className="container">
          <div className="site-header-inner">
            <div className="brand header-brand">
              <h1 className="m-0">
                <a href="#">
                  <img src={logoLight} alt="Logo" />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-copy">
                <h1 className="hero-title mt-0">Welcome To Fyber</h1>
                <p className="hero-paragraph">
                  Decentralised marketplace to buy, sell and lend goods powered by Kyber and Compound
                </p>
                <div className="hero-cta">
                  <Link to="/shop" className="button button-primary">
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="hero-media">
                <div className="header-illustration">
                  <img
                    src={headerIllustrationLight}
                    alt="Header illustration"
                  />
                </div>
                <div className="hero-media-illustration">
                  <img
                    src={heroMediaIllustrationLight}
                    alt="Hero media illustration"
                    style={{ marginLeft: "100px" }}
                  />
                </div>
                {/* <div className="hero-media-container">
                  <img
                    className="hero-media-image"
                    src={heroMediaLight}
                    alt="Hero media"
                    style={{ marginTop: "-300px", marginLeft: "0" }}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section className="features section">
          <div className="container">
            <div className="features-inner section-inner has-bottom-divider">
              <div className="features-header text-center">
                <div className="container-sm">
                  <h2 className="section-title mt-0">The Platform</h2>
                  <p className="section-paragraph">
                    You can buy/sell in any token, swaps powered by Kyber network
                  </p>
                  <div className="features-image">
                    <img
                      className="features-illustration"
                      src={featuresIllustrationLight}
                      alt="Feature illustration"
                    />
                    <img
                      className="features-box"
                      src={featuresBoxLight}
                      alt="Feature box"
                    />
                    <img
                      className="features-illustration"
                      src={featuresIllustrationTopLight}
                      alt="Feature illustration top"
                    />
                  </div>
                </div>
              </div>
              <div className="features-wrap">
                <div className="feature is-revealing">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img src={features01Light} alt="Feature 01" />
                    </div>
                    <div className="feature-content">
                      <h3 className="feature-title mt-0">Borrow/Lend</h3>
                      <p className="text-sm mb-0">
                        Borrow using compound, you pay security deposit along with borrow fee, if you return 
                        item you get to own all your deposit otherwise it's liquidated
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feature is-revealing">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img src={features02Light} alt="Feature 02" />
                    </div>
                    <div className="feature-content">
                      <h3 className="feature-title mt-0">Fyber Extras</h3>
                      <p className="text-sm mb-0">
                        We split interest earned on deposit 50/50 to both buyer and seller if he/she returns 
                        the item, if not seller keeps all the interest+deposit
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feature is-revealing">
                  <div className="feature-inner">
                    <div className="feature-icon">
                      <img src={features03Light} alt="Feature 03" />
                    </div>
                    <div className="feature-content">
                      <h3 className="feature-title mt-0">Support us</h3>
                      <p className="text-sm mb-0">
                        Support Fyber devs to create a truely decentralized platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta section">
          <div className="container-sm">
            <div className="cta-inner section-inner">
              <div className="cta-header text-center">
                <h2 className="section-title mt-0">Start Using Fyber Now</h2>
                <p className="section-paragraph">
                  Powered by Kyber, Compound and Status
                </p>
                <div className="cta-cta">
                  <Link to="/shop" className="button button-primary" href="#">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer has-top-divider">
        <div className="container">
          <div className="site-footer-inner">
            <div className="brand footer-brand">
              <a href="#">
                <img src={logoLight} alt="Logo" />
              </a>
            </div>
            <ul className="footer-social-links list-reset">
              <li>
                <a href="#">
                  <span className="screen-reader-text">Facebook</span>
                  <svg
                    width={16}
                    height={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                      fill="#FFF"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="screen-reader-text">Twitter</span>
                  <svg
                    width={16}
                    height={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                      fill="#FFF"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="screen-reader-text">Google</span>
                  <svg
                    width={16}
                    height={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                      fill="#FFF"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="footer-copyright">
              © 2019 Fyber, all rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default LandingPage;
