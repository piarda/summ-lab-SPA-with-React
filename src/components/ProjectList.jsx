import React from 'react';
import styles from './ProjectList.module.css';
import ProjectItem from './ProjectItem';

function ProjectList({ projects }) {
  return (
    <div className={styles.projectList}>
      {projects.length > 0 ? (
        projects.map((project) => (
          <div key={project.id} className={styles.projectItem}>
            <ProjectItem project={project} />
          </div>
        ))
      ) : (
        <p>No projects.</p>
      )}
    </div>
  );
}

export default ProjectList;
