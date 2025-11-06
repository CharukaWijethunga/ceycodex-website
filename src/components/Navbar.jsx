import React from 'react';
import './Navbar.css'; // <-- Import the CSS file
const Navbar = ({ content }) => {
  return (
    <nav>
      <a href="#home" className="logo">{content.logo}</a>
      <ul>
        {content.links.map((link) => (
          <li key={link.text}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;