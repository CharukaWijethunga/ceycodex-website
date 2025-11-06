import React from 'react';
import './Services.css'; // <-- Import the CSS file
const Services = ({ content }) => {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>
        <div className="services-grid">
          {content.services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;