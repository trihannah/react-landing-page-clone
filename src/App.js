import React from 'react';
import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <header className={`${styles.container} ${styles.fixed}`}>
        <nav>
          <a href="/">
            <img
              src="\images\useform-white.png"
              alt="Your Logo"
              className={styles.logoImageWhite} // Add a class for styling (if needed)
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
          </ul>
          <div className={styles.buttonBox}>
            <a
              href="/#"
              className={`${styles.baseButton} ${styles.buttonBlack}`}
            >
              Login
            </a>
            <div className={styles.buttonBox}>
              <a
                href="/#"
                className={`${styles.baseButton} ${styles.buttonBlue}`}
              >
                Start for free
              </a>
            </div>
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
              <h1>The easiest way to create an online form</h1>
              <p className={styles.smallerHeadline}>
                Build forms in minutes instead of hours. The last form-builder
                you'll ever need.
              </p>
              <a
                href="#"
                className={`${styles.baseButton} ${styles.buttonBlue}`}
              >
                Create my first form for free
              </a>
              <p className={styles.smallerText}>
                Trusted by agencies & freelancers <a href="#"> View pricing</a>
              </p>
            </div>
          </div>
        </section>
        <section>Section1</section>
      </main>
      <footer>Footer</footer>
    </>
  );
}
