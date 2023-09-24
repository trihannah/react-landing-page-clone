import React from 'react';
import styles from './App.module.scss';
import blueButton from './BlueButton.js';
import blueButtonStyles from './BlueButton.module.scss';

export default function App() {
  return (
    <>
      <header className={`${styles.container} ${styles.fixed}`}>
        <nav>
          <a href="/">
            <img
              src="\images\useform.png"
              alt="Your Logo"
              className={styles.logoImage}
            />
          </a>
          <ul>
            <li>
              <a href="/#">Pricing</a>
            </li>
            <li>
              <a href="/#">Platforms</a>
            </li>
            <li>
              <a href="/#">Why Useform?</a>
            </li>
            <li>
              <a href="/#">Features</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
            <li>
              <a href="/#">Sign In</a>
            </li>
          </ul>
          <div className={styles.buttonBox}>
            <a href="/#" className={blueButtonStyles.blueButton}>
              {' '}
              Get started for free
            </a>
          </div>
        </nav>
      </header>
      <main>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.greyBox}>
                <p>Create forms for any website, without the pain</p>
              </div>
              <h1>
                The easiest way to <br /> create an online form
              </h1>
              <p className={styles.smallerHeadline}>
                Build forms in minutes instead of hours. <br /> The last
                form-builder you'll ever need.
              </p>
              <div className={styles.buttonBox}>
                <a href="/#" className={blueButtonStyles.blueButton}>
                  {' '}
                  Create my first form for free
                </a>
              </div>

              <p className={styles.smallerText}>
                Trusted by agencies & freelancers <a href="#"> View pricing</a>
              </p>
            </div>
          </div>
        </section>
        <section className={styles.section1}>
          <div className={styles.imageContainer}>
            <img
              src="\images\dashboard-satisfaction-form.png"
              alt="Dashboard Satisfaction Form"
            />
          </div>
        </section>
      </main>
      <footer>
        <footer>
          <div className={styles.container}>
            <h2>
              Ditch your bloated form builder and <br /> focus on what matters
              the most.
            </h2>
            <p>
              Create a form, embed it into your website <br /> and share it with
              your clients, in minutes.
            </p>
            <div className={styles.buttonBox}>
              <a href="/#" className={blueButtonStyles.blueButton}>
                {' '}
                Get started for free
              </a>
            </div>
          </div>
        </footer>
      </footer>
    </>
  );
}
