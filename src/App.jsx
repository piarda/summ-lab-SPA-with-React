import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import AddProjectForm from './components/AddProjectForm';
import starterProjects from './data/projects';
import './App.css';

function App() {
  const [projects, setProjects] = useState(starterProjects);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  // Filters projects based on searchTerm
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Personal Project Showcase App</h1>
      <div><AddProjectForm onAddProject={handleAddProject} /></div>
      <div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
}

export default App;
