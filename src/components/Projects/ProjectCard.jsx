import React from "react";
import styles from "./ProjectCard.module.css";

export const getImageUrl = (path) => {
  return `${import.meta.env.BASE_URL}${path}`;
};

export const ProjectCard = ({ project: { title, description, skills, imageSrc, demo } }) => {
  return (
    <div className={styles.container}>
      {/* Updated image source */}
      <img src={getImageUrl(imageSrc)} alt={title} className={styles.image} />

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>

      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
};
