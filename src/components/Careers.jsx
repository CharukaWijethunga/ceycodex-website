import React from 'react';
import PositionItem from './PositionItem';
import './Careers.css'; // <-- Import the CSS file
const Careers = ({ content }) => {
  return (
    <section id="careers">
      <div className="container">
        <div className="section-header">
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>
        <div className="careers-intro">
          <p>{content.intro}</p>
        </div>
        <div className="positions-list">
          {content.positions.map((item) => (
            <PositionItem item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;