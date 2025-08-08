import React, { useState } from 'react';

function AddProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title.trim() || !description.trim()) {
      alert('Please fill in both fields.');
      return;
    }

    const newProject = {
      id: Date.now(), // temporary unique ID
      title,
      description,
    };

    onAddProject(newProject);

    // Clear the form
    setTitle('');
    setDescription('');
  };

  return (
    <div className="add-project-form">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label><br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <label htmlFor="description">Description:</label><br />
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
          />
        </div>

        <button type="submit" style={{ marginTop: '15px' }}>Add</button>
      </form>
    </div>
  );
}

export default AddProjectForm;
