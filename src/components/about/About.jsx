import React from 'react'

import styles from './About.module.css'
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section
      className={styles.container}
      id='about'
    >
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.intro}>
          <p>
            ❝ Greetings! I am a techie who loves crafting innovative Web
            Applications with a focus on creating user-friendly and efficient
            solutions. With a background in computer science, I have got a
            hands-on experience working on a live project, I specialize in
            React.js, Next.js, MERN stack, Django. My experience extends to
            optimizing performance, ensuring responsive design, and integrating
            third-party libraries such as Redux/Toolkit/RTK Query, Tailwind CSS,
            and many more. I believe in the power of teamwork and collaboration,
            having successfully contributed to projects in agile environments. ❞
          </p>
          <a
            className={styles.call}
            href='#contact'
          >
            Let's innovate together!
          </a>
        </div>
      </div>
    </section>
  )
}
