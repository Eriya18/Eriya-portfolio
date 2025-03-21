import React from 'react'
import styles from "./ProjectCard.module.css"
export const getImageUrl = (path) => {
    return "/" + path;
};

export const ProjectCard = ({project : {title, description, skills, imageSrc, demo}}) => {
  return (
    <div className={styles.container}>
        <img src={getImageUrl(imageSrc)} alt="" className={styles.image}/>
           <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
                 <ul className={styles.skills}>{
                     skills.map((skill, id)=>{
                        return(
                      <li key={id} className={styles.skill}>
                        {skill}</li>)
                       })}</ul>
                         <div className={styles.links}>
                             <a href={demo} className={styles.link}>Demo</a>
                            </div>
                         </div>
  )
}
