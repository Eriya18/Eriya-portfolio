import React from 'react';
import styles from "./Contact.module.css";

export const getImageUrl = (path) => {
  return `${import.meta.env.BASE_URL}${path}`;
};

export const Contact = () => {
  return (
    <footer className={styles.container} id="Contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach</p> 
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("assets/contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:eriyajain18@gmail.com">eriyajain18@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("assets/contact/linkedinIcon.png")} alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/eriya-jain-21a73b286/">linkedin.com/Eriya</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("assets/contact/githubIcon.png")} alt="GitHub Icon" />
          <a href="https://github.com/Eriya18">github.com/Eriya</a>
        </li>
      </ul>
    </footer>
  );
};
