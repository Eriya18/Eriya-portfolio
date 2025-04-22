import React from 'react';
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";

export const getImageUrl = (path) => {
  return path;
};

export const Experience = () => {
  return (
    <div className={styles.container} id="Experience">
      {/* Skills Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Skills</h2>
        </div>
        <div className={styles.skillsContent}>
          <div className={styles.skills}>
            {skills.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Separate from Skills */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Experience</h2>
        </div>
        <div className={styles.experienceContent}>
          <div className={styles.history}>
            {history.map((historyItem, id) => (
              <div key={id} className={styles.historyItem}>
                <img src={getImageUrl(historyItem.imageSrc)} alt={historyItem.organisation} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, idx) => (
                      <li key={idx}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
