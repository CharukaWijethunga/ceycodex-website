import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Details</h3>
            <p>Ready to start your next project? We'd love to hear from you.</p>
            <p><strong>Email:</strong> info@ceycodex.lk</p>
            <p><strong>Phone:</strong> +94 11 234 5678</p>
            <p><strong>Address:</strong><br />
              123, Galle Road,<br />
              Colombo 03,<br />
              Sri Lanka
            </p>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form action="#" method="POST">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;