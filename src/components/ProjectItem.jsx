import React from 'react';
import styles from './ProjectItem.module.css';

function ProjectItem({ project }) {
  return (
    <article className={styles.projectItem}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </article>
  );
}

export default ProjectItem;
