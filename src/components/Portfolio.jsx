import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <h2>Our Work</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">Project Alpha<br />(FinTech Platform)</div>
          <div className="portfolio-item">Project Beta<br />(E-commerce Solution)</div>
          <div className="portfolio-item">Project Gamma<br />(SaaS Product)</div>
        </div>
        {/* I've converted the inline style to a React-friendly object */}
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>Showcasing our best work. (More projects coming soon!)</p>
      </div>
    </section>
  );
}

export default Portfolio;