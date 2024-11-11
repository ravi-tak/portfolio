import React from "react";

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import LazyLoaded from "../LazyLoaded";

export const Skills = () => {
  return (
    <section
      className={styles.container}
      id='skills'
    >
      <h2 className={styles.title}>Skills</h2>
      <LazyLoaded>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => (
              <div
                key={id}
                className={styles.skill}
              >
                <div className={styles.skillImageContainer}>
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </LazyLoaded>
    </section>
  )
};
