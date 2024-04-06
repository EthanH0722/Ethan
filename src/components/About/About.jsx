import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/AIIcon.png")} alt="AI icon" />
            <div className={styles.aboutItemText}>
              <h3>AI Pioneers</h3>
              <p>
              I am an Ai Pioneers and ML research assistant at UTA, I specialize in LLM and have trained numerous models, contributing to cutting-edge AI advancements.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cloudIcon.png")} alt="Cloud icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud Architect</h3>
              <p>
              I am a cloud architect, leveraging my proficiency to design scalable and resilient 
              cloud infrastructures to deliver innovative solutions that meet and exceed client expectations.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/webIcon.png")} alt="Web icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I'm a full-stack developer with experience in building responsive
                sites and developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
