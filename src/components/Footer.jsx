import React from 'react';
import './Footer.css';

const Footer = ({ content }) => {
  return (
    <footer>
      {/* CTA Section */}
      <div className="footer-cta">
        <div className="cta-content">
          <h3>{content.cta.title}</h3>
          <p>{content.cta.description}</p>
          <a href="#contact" className="btn btn-primary">{content.cta.button}</a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-wrapper">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <h4>{content.brand}</h4>
            <p className="tagline">{content.tagline}</p>
            <div className="footer-info">
              <p><strong>Email:</strong> <a href={`mailto:${content.email}`}>{content.email}</a></p>
              <p><strong>Location:</strong> {content.location}</p>
            </div>
            <div className="social-links">
              {content.socials.map((social) => (
                <a 
                  href={social.href} 
                  className="social-link" 
                  title={social.title} 
                  key={social.title}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {content.sections.map((section, index) => (
            <div className="footer-section" key={index}>
              <h4>{section.title}</h4>
              {section.links.map((link) => (
                <a href={link.href} key={link.text}>{link.text}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>{content.copyright}</p>
          <div className="footer-bottom-links">
            {content.sections.find(s => s.title === 'Legal')?.links.map((link) => (
              <a href={link.href} key={link.text}>{link.text}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;