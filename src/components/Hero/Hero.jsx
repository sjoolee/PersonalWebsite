import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Subin Lee</h1>
        <p className={styles.description}>
          I'm a McMaster University student majoring in Biomedical and Electrical Engineering
          and have been fascinated by computer vision, data analytics and machine learning. Please 
          reach out if you'd like to learn more!
        </p>
        <a href="mailto:lee505@mcmaster.ca" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img
        src={getImageUrl("hero/aboutImage.png")}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
