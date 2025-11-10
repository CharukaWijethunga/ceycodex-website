import React, { useState, useEffect } from 'react';
import ZenPatternUrl from '../assets/zen-pattern.svg';
import './Hero.css';

// Custom hook for the typing effect
const useTypingEffect = (text, delay = 50) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return currentText;
};

const Hero = ({ content }) => {
  // Use the custom hook for the typing effect
  const typedTitle = useTypingEffect(content.title, 100);
  const typedSubtitle = useTypingEffect(content.subtitle, 0);

  return (
    <section id="home">
      <div className="hero-content">
        {/* Title with cursor animation via CSS */}
        <h1 className="typing-text">{typedTitle}<span className="cursor">|</span></h1>
        
        {/* Subtitle with cursor animation via CSS, only shows after title is complete */}
        <p className="typing-text-p">{typedSubtitle}<span className="cursor"></span></p>
        
        <div className="button-group">
          {/* We only show buttons after the subtitle typing is done */}
          {typedSubtitle.length === content.subtitle.length && (
            <>
              <a href="#contact" className="btn btn-primary">{content.primaryButton}</a>
              <a href="#projects" className="btn btn-secondary">{content.secondaryButton}</a>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;