import React from 'react'
import styles from "./About.module.css";

export const getImageUrl = (path) => {
    return process.env.PUBLIC_URL + "/" + path;
  };

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}><img src="assets/about/aboutImage.png" alt="" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src="assets/about/cursorIcon.png" alt="" />
                <div className={styles.aboutItemText}>
                    <h3>Web Developer </h3>
                    <p>I create responsive and interactive web applications.</p>
                </div>
            </li >
            <li className={styles.aboutItem}><img src="assets/about/serverIcon.png" alt="" />
                <div className={styles.aboutItemText}>
                    <h3>QA & Testing Specialist</h3>
                    <p>I test and optimize web applications ensuring seamless functionality and a bug-free user experience. </p>
                </div>
            </li>
            {/* <li className={styles.aboutItem}><img src="assets/about/cursorIcon.png" alt="" />
                <div className={styles.aboutItemText}>
                    <h3>UI Designer </h3>
                    <p>I have designed multiple landing pages and have created design systems as well</p>
                </div>
            </li> */}
        </ul>
        </div>
    </section>
  )
}
