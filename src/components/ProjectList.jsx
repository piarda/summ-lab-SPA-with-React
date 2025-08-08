import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.length === 0 ? (
        <p>No projects.</p>
      ) : (
        projects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            description={project.description}
          />
        ))
      )}
    </div>
  );
}

export default ProjectList;
