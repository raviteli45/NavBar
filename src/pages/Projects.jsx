import React from 'react';
import './Projects.css';
import { DiAndroid } from "react-icons/di";

const Projects = () => {
  return (
    <div className="projects-container">
      <DiAndroid className='Android' size={130} />
      <h1>My projects</h1>
      <p>This is the projects page.</p>
    </div>
  );
};

export default Projects;
