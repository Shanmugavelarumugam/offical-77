import { Dumbbell, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import Container from '../ui/Container';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer section glass-panel">
      <Container>
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <Dumbbell className="logo-icon text-gradient" size={36} />
              <span className="logo-text">77 FITNESS</span>
            </div>
            <p className="footer-desc text-subtle">
              Elevate your limits. Premium equipment, expert coaching, and a community that drives you to be your absolute best.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="social-link" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="social-link" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="social-link" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#trainers">Our Team</a></li>
              <li><a href="#plans">Memberships</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Visit Us</h4>
            <ul className="footer-contact-info text-subtle">
              <li>123 Fitness Ave, Suite 77</li>
              <li>Metropolis, NY 10001</li>
              <li><a href="mailto:hello@77fitness.com" className="contact-link">hello@77fitness.com</a></li>
              <li><a href="tel:+1234567890" className="contact-link">+1 (234) 567-890</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="footer-desc text-subtle">Subscribe to get the latest fitness tips and exclusive offers.</p>
            <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                id="newsletter-email"
                name="email"
                autoComplete="email"
                placeholder="Your email address" 
                className="footer-input" 
                required 
              />
              <button type="submit" className="footer-submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} 77 Fitness Studio. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
