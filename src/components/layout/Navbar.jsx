import { useState, useEffect, useRef } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './Navbar.css';
import { cx } from '../../utils/helpers';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Programs', id: 'programs' },
  { name: 'Plans', id: 'plans' },
  { name: 'Trainers', id: 'trainers' },
  { name: 'Gallery', id: 'gallery' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down - hide
      } else {
        setIsVisible(true); // Scrolling up - show
      }
      
      lastScrollY.current = currentScrollY;
      setIsScrolled(currentScrollY > 20);
      
      // Update active link based on scroll position
      const sections = navLinks.map(link => link.id);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(id);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (id) => {
    scrollToSection(id);
    closeMobileMenu();
  };

  return (
    <nav className={cx('navbar', isScrolled && 'navbar-scrolled', !isVisible && 'navbar-hidden', 'glass-panel')}>
      <Container className="navbar-container">
        {/* Logo */}
        <button className="navbar-logo" onClick={() => scrollToSection('home')}>
          <Dumbbell className="logo-icon text-gradient" size={32} />
          <span className="logo-text">77 FITNESS</span>
        </button>

        {/* Desktop Navigation */}
        <div className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className={cx('nav-link', activeLink === link.id && 'active')}
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="navbar-cta desktop-only">
          <Button variant="primary" glow>Join Now</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-btn mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* Mobile Drawer */}
      <div className={cx('mobile-drawer glass-panel', isMobileMenuOpen && 'open')}>
        <div className="mobile-drawer-content">
          {navLinks.map((link, index) => (
            <button
              key={link.name}
              className={cx('mobile-nav-link', activeLink === link.id && 'active')}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleNavClick(link.id)}
            >
              {link.name}
            </button>
          ))}
          <div className="mobile-cta-wrapper" style={{ animationDelay: `${navLinks.length * 0.1}s` }}>
            <Button variant="primary" size="lg" className="w-full" onClick={closeMobileMenu}>
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
