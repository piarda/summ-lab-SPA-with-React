import React, { useState } from 'react';
import styles from './AddProjectForm.module.css';
import { v4 as uuidv4 } from 'uuid';

function AddProjectForm({ onAddProject }) {
  // Local state to track form inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Makes sure the fields are not empty
    if (!title.trim() || !description.trim()) {
      alert('Please fill in both fields.');
      return;
    }

    // Generate unique ID for new project
    const newProject = {
      id: uuidv4(),
      title,
      description,
    };

    // Passes new project up to parent component
    onAddProject(newProject);

    // Clear form inputs after submitting
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.heading}>Add Project</h2>
      <label className={styles.label} htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <label className={styles.label} htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.textarea}
        rows="3"
      />
      <button type="submit" className={styles.button}>Add</button>
    </form>
  );
}

export default AddProjectForm;
