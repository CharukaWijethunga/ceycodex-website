import React from 'react';
import './OP.css'; // <-- Import the CSS file

const OpenSourceProjects = ({ content }) => {
  return (
    <section id="open-source">
      <div className="container">
        <div className="section-header">
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>
        
        {/* Updated grid to map over 'contributions' */}
        <div className="projects-grid">
          {content.contributions.map((item) => (
            <div className="project-card" key={item.projectName}>
              {/* Updated project-image to be a logo/icon */}
              <div className="project-icon">{item.projectIcon}</div>
              
              <div className="project-content">
                <h3>{item.projectName}</h3>
                <p className="project-summary">{item.summary}</p>
                <div className="project-tags">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                
                {/* New "View Contribution" button */}
                <a 
                  href={item.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-github"
                >
                  View Contribution
                  <span className="github-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceProjects;