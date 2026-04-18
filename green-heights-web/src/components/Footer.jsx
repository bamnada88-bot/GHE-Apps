import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="navbar-logo footer-logo">
            <img src="/logo.png" alt="GHE Logo" className="logo-img" />
            <div className="logo-text">
              <span className="logo-title text-white">Green Heights Egypt</span>
              <span className="logo-subtitle text-secondary">American School</span>
            </div>
          </div>
          <p className="footer-desc">
            Empowering students to achieve their full potential through excellence in education, character, and leadership.
          </p>
          <div className="social-links">
            {/* Social icons hidden temporarily */}
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>56 District Center, in front of the High Institute of Technology, 10th of Ramadan City, Egypt</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+20 10 12177159</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>info@gh-egypt.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Green Heights Egypt American School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
