import React from 'react';
import './Projects.css'; // <-- Import the CSS file
const Projects = ({ content }) => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>
        <div className="projects-grid">
          {content.projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-image">{project.imageText}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;