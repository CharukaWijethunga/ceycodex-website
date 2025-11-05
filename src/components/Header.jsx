import React, { useState } from 'react';
import styles from './Header.module.css'; // Import the CSS module

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper for dynamic classes
  const navLinksClasses = `${styles.navLinks} ${menuOpen ? styles.active : ''}`;

  return (
    <header className={styles.navbar} id="navbar">
      <div className="container"> {/* We can still use global styles! */ }
        <a href="#hero" className={styles.logo}>CEY<span>CODEX</span></a>
        
        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={navLinksClasses}>
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Our Work</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;