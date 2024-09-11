import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={`${styles.description} ${styles.greet}`}>
          👋 Hi :) , I'm
        </p>
        <h1 className={styles.title}>Ravi Kumar Tak</h1>
        <p className={styles.description}>
          A Full-Stack Developer with ample experience in the Web. I am
          passionate about learning more about tech.
        </p>
        <div className={styles.contact}>
          <a
            href="https://drive.google.com/file/d/1knZD6M5AdUxNtMt0V0eWPAb6bEPiVCuH/view?usp=sharing"
            target="_blank"
            className={styles.resume}
          >
            Resumé
          </a>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/ravi-kumar-tak-b80205212/"
                target="_blank"
              >
                <img
                  src={getImageUrl("contact/linkedinIcon.png")}
                  alt="linkedin"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ravi-tak"
                target="_blank"
              >
                <img
                  src={getImageUrl("contact/githubIcon.png")}
                  alt="github"
                />
              </a>
            </li>
            <li>
              <a
                href="mailto:ravikumartakajm@gmail.com"
                target="_blank"
              >
                <img
                  src={getImageUrl("contact/emailIcon.png")}
                  alt="email"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
