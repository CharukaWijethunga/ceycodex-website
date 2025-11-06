import React from 'react';
import './Navbar.css'; // <-- Import the CSS file
const Navbar = ({ content }) => {
  return (
    <nav>
      <a href="#home" ><span className="logo">CeyCode</span><span className='last-letter'>X</span></a>
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