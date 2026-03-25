import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import './Navbar.css';
import { cx } from '../../utils/helpers';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Plans', href: '#plans' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Gallery', href: '#gallery' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active link based on scroll position - simple version
      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={cx('navbar', isScrolled && 'navbar-scrolled glass-panel')}>
      <Container className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMobileMenu}>
          <Dumbbell className="logo-icon text-gradient" size={32} />
          <span className="logo-text">77 FITNESS</span>
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cx('nav-link', activeLink === link.href && 'active')}
              onClick={() => setActiveLink(link.href)}
            >
              {link.name}
            </a>
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
            <a
              key={link.name}
              href={link.href}
              className={cx('mobile-nav-link', activeLink === link.href && 'active')}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                setActiveLink(link.href);
                closeMobileMenu();
              }}
            >
              {link.name}
            </a>
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
