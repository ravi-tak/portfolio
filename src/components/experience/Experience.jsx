import React from "react";

import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section
      className={styles.container}
      id="experience"
    >
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id}>
              <div className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                  <div className={styles.work}>
                    <a
                      className={styles.link}
                      href={historyItem.link}
                      target="_blank"
                    >
                      Live
                    </a>
                    <div className={styles.historyImgDiv}>
                      <img
                        src={getImageUrl(historyItem.imageSrc[0])}
                        alt="img"
                      />
                      <img
                        src={getImageUrl(historyItem.imageSrc[1])}
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
