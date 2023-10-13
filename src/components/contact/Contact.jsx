import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer
      id="contact"
      className={styles.container}
    >
      <div className={styles.text}>
        <div>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a
              href="https://www.linkedin.com/in/ravi-kumar-tak-b80205212/"
              target="_blank"
            >
              linkedin.com/ravi-tak
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <a
              href="https://github.com/ravi-tak"
              target="_blank"
            >
              github.com/ravi-tak
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/emailIcon.png")}
              alt="Email icon"
            />
            <a href="mailto:ravikumartakajm@gmail.com">
              ravikumartakajm@gmail.com
            </a>
          </li>
        </ul>
        <ul className={styles.hide}>
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
      <div class={styles.contactForm}>
        <form
          action="https://formspree.io/f/mjvqpnwj"
          method="POST"
        >
          <label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </label>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </label>
          <label>
            <textarea
              name="message"
              placeholder="Message"
              required
            />
          </label>
          <button type="submit">Get In Touch</button>
        </form>
      </div>
    </footer>
  );
};
