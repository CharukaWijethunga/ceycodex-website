import React from 'react';
import './Hero.css'; // <-- Import the CSS file
const Hero = ({ content }) => {
  return (
    <section id="home">
      <div className="hero-content">
        <h1>{content.title}</h1>
        <p>{content.subtitle}</p>
        <div className="button-group">
          <a href="#contact" className="btn btn-primary">{content.primaryButton}</a>
          <a href="#projects" className="btn btn-secondary">{content.secondaryButton}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;