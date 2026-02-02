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
              {/* CHANGE: Replaced text/emoji with an <img> tag */}
              <div className="service-icon">
                <img src={service.iconUrl} alt={service.title} /> 
              </div>
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