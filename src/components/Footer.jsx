import React from 'react';
import './Footer.css';

const Footer = ({ content }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Main Footer Content */}
      <div className="footer-wrapper">
        <div className="footer-content">

          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <div className="brand-header">
              <h4>{content.brand}</h4>
              <p className="tagline">{content.tagline}</p>
            </div>

            <div className="footer-details">
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
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} {content.brand}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;