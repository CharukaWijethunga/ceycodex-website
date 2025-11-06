import React from 'react';
import './Team.css'; // <-- Import the CSS file
const Team = ({ content }) => {
  return (
    <section id="team">
      <div className="container">
        <div className="section-header">
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>
        <div className="team-grid">
          {content.members.map((member) => (
            <div className="team-card" key={member.name}>
              <div className="team-avatar">{member.avatar}</div>
              <h3>{member.name}</h3>
              <div className="team-title">{member.title}</div>
              <p>{member.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;