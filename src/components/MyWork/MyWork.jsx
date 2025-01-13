import React from 'react';
import './MyWork.css';

const MyWork = () => {
  const projects = [
    { title: 'Project 1: Portfolio ', description: 'A personal portfolio using reactjs', link: 'https://mohith-dev.vercel.app/' },
    { title: 'Project 2:Task Manager', description: 'Task Manager using react and mongodb', link: 'https://taskerflow.vercel.app/' },
    { title: 'Project 3', description: 'Description for project 3', link: '#' },
    { title: 'Project 4', description: 'Description for project 4', link: '#' },
  ];

  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1 id='projects'>My work</h1>
      </div>
      <div className="mywork-container">
        {projects.map((project, index) => (
          <div className="mywork-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
