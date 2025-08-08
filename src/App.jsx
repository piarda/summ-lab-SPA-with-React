import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import AddProjectForm from './components/AddProjectForm';
import starterProjects from './data/projects';
import './App.css';

function App() {
  // State to hold the list of projects
  const [projects, setProjects] = useState(starterProjects);
  // State for search input value
  const [searchTerm, setSearchTerm] = useState('');

  // Handler to add a new project to the project list
  const handleAddProject = (newProject) => {
    const projectWithId = {
      id: projects.length > 0 ? projects[projects.length - 1].id + 1 : 1,
      ...newProject,
    };
    setProjects([...projects, projectWithId]);
  };

  // Filters projects based on searchTerm
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header>
        <h1>Personal Project Showcase App</h1>
      </header>
      <main>
        <section>
          <AddProjectForm onAddProject={handleAddProject} />
        </section>
        <section>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ProjectList projects={filteredProjects} />
        </section>
      </main>
    </div>
  );
}

export default App;
