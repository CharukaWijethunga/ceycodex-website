import React from 'react';
import styles from './ComingSoon.module.css'; // We will create this file next

function ComingSoon() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentCard}>
        <div className={styles.logo}>
          CEY<span>CODEX</span>
        </div>
        
        <h1>We're Launching Soon!</h1>
        
        <p>
          Our new website is under construction. We are working hard to 
          bring you an amazing digital experience from the heart of Sri Lanka.
        </p>

        <h3>Be the first to know</h3>
        
        <form 
          className={styles.subscribeForm} 
          action="#" // Replace with Formspree or other service
          method="POST"
        >
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email address" 
            required 
          />
          <button type="submit" className={styles.submitButton}>
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default ComingSoon;