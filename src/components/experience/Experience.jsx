import React from 'react'

import styles from './Experience.module.css'
import history from '../../data/history.json'
import { getImageUrl } from '../../utils'
import LazyLoaded from '../LazyLoaded'

export const Experience = () => {
  return (
    <section
      className={styles.container}
      id='experience'
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
                      return <li key={id}>{experience}</li>
                    })}
                  </ul>
                  <div className={styles.work}>
                    {historyItem?.link && (
                      <a
                        className={styles.link}
                        href={historyItem?.link}
                        target='_blank'
                      >
                        Live
                      </a>
                    )}
                    <LazyLoaded>
                      {historyItem?.imageSrc?.length > 0 && (
                        <div className={styles.historyImgDiv}>
                          {historyItem?.imageSrc?.map((img) => (
                            <img
                              src={getImageUrl(img)}
                              alt='img'
                            />
                          ))}
                        </div>
                      )}
                    </LazyLoaded>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
