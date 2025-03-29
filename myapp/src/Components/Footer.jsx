import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-about">
          <h2>Aman</h2>
          <p>
            I'm a passionate web developer focused on building creative and
            user-friendly web solutions. Let's connect and bring ideas to life!
          </p>
        </div>
        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-socials">
          <h2>Follow Me</h2>
          <div className="social-icons">
            <a href="https://github.com/amanvivekanand006" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/aman-v-699464275/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
