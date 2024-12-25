import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/typing.gif")}
          alt="typing"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/artificial-intelligence.png")} alt="ai-icon" className={styles.aboutImages}/>
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Developer</h3>
              <p>
              My expertise lies in designing machine learning solutions that utilize complex algorithms to process large datasets 
              efficiently. Additionally, I have developed and deployed computer vision algorithms that transform visual data into 
              actionable insights, using advanced techniques and frameworks.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/data.png")} alt="data icon" className={styles.aboutImages}/>
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
              I specialize in transforming raw data into insights by applying statistical modeling, predictive analytics, and machine
              learning techniques. I can work anywhere within the data pipeline, from data collection and preprocessing to cleaning and
              structuring the data, identify any trends, and/or build predictive models that drive informed decision-making. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/computer.png")} alt="computer icon" className={styles.aboutImages}/>
            <div className={styles.aboutItemText}>
              <h3>Computer/ Circuit Designer</h3>
              <p>
              I have a strong foundation in microcontrollers and electrical work, including the use of resistors, operational amplifiers,
              and other components in circuit design. My expertise extends to developing embedded systems and working with hardware to 
              build efficient, functional solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
