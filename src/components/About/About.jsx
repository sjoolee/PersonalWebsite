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
              My expertise includes designing ML solutions that utilize complex algorithms for processing large 
              datasets, therby enabling predictive analytics and image recognition
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/data.png")} alt="data icon" className={styles.aboutImages}/>
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
              I transform raw data into insights through statistical modeling, predictive analytics, and machine
              learning techniques. My expertise spans across data collection, processing, and analysis.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/computer.png")} alt="computer icon" className={styles.aboutImages}/>
            <div className={styles.aboutItemText}>
              <h3>Computer Vision Designer</h3>
              <p>
              I've developed and deployed computer vision algorithms to transform visual data into insights, 
              using advanced techniques and frameworks like OpenCV, TensorFlow, and PyTorch. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
