import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section
      className={styles.container}
      id="about"
    >
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.intro}>
          <p>
            ❝ Greetings! I am a techie who loves crafting innovative Web
            Applications with a focus on creating user-friendly and efficient
            solutions. With a background in computer science, I have got a
            hands-on experience of working on a live project. I believe in the
            power of teamwork and collaboration. Currently, I'm sharpening my
            skills in cutting-edge technologies such as RTK Query, Django REST,
            and NodeJS, with a keen interest in unlocking their potential to
            elevate digital experiences. ❞
          </p>
          <a
            className={styles.call}
            href="#contact"
          >
            Let's innovate together!
          </a>
        </div>
      </div>
    </section>
  );
};
