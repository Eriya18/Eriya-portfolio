import React from 'react'
import projects from '../../data/Projects.json';
import { ProjectCard } from './ProjectCard';
import styles from "./Projects.module.css";

export const Project = () => {
  return (
    <section className={styles.container} id="Projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {
                projects.map((project, id)=>{
                    return(
                        <ProjectCard key={id} project={project}/>
                    )
                })}
        </div>
    </section>
  )
}
