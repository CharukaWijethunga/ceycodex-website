import React from 'react';

function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-grid">
          {/* Service 1 */}
          <div className="service-card">
            <div className="icon">💻</div>
            <h3>Custom Software Development</h3>
            <p>Bespoke solutions built from scratch to meet your unique business requirements.</p>
          </div>
          {/* Service 2 */}
          <div className="service-card">
            <div className="icon">📱</div>
            <h3>Mobile App Development</h3>
            <p>Native (iOS, Android) and cross-platform (React Native, Flutter) apps that delight users.</p>
          </div>
          {/* Service 3 */}
          <div className="service-card">
            <div className="icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>User-centric design, prototyping, and user testing to create intuitive and beautiful interfaces.</p>
          </div>
          {/* Service 4 */}
          <div className="service-card">
            <div className="icon">☁️</div>
            <h3>Cloud & DevOps</h3>
            <p>Streamline your operations with our CI/CD, cloud migration, and infrastructure management services.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;