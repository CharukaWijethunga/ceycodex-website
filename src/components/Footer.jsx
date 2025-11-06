import React from 'react';
import './Footer.css'; // <-- Import the CSS file
const Footer = ({ content }) => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>{content.brand}</h4>
          <p style={{ color: '#C0C0C0' }}>{content.tagline}</p>
          <div className="social-links">
            {content.socials.map((social) => (
              <a href={social.href} className="social-link" title={social.title} key={social.title}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          {content.links.map((link) => (
            <a href={link.href} key={link.text}>{link.text}</a>
          ))}
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          {content.legal.map((link) => (
            <a href={link.href} key={link.text}>{link.text}</a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>{content.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;