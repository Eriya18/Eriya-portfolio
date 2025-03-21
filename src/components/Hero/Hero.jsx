import React from 'react';
import styles from "./Hero.module.css";

export const getImageUrl = (path) => {
  return `${import.meta.env.BASE_URL}${path}`;
};

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Eriya</h1>
        <p className={styles.description}>
          I'm a BCA student passionate about coding, problem-solving, and developing scalable web applications with the latest technologies.
        </p>
        <a href="mailto:eriyajain18@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>

      {/* Updated image source */}
      <img src={getImageUrl("assets/hero/myimg4.jpg")} alt="Eriya" className={styles.heroImg} />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
