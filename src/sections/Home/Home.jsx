import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import { motion } from 'framer-motion';
import './Home.css';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  return (
    <section id="home" className="home">
      {/* Background Orbs */}
      <motion.div 
        className="hero-glow hero-glow-1"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="hero-glow hero-glow-2"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <Container className="home-content">
        {/* Left Column - Text Content */}
        <motion.div 
          className="home-text-col"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUpVariant} className="home-badge">
            <span className="badge-dot"></span>
            Elevate Your Limits
          </motion.div>
          
          <motion.h1 variants={fadeUpVariant} className="home-title heading-xl">
            Unleash Your <br />
            <span className="text-gradient home-title-gradient">True Potential</span>
          </motion.h1>
          
          <motion.p variants={fadeUpVariant} className="home-desc">
            Join the most exclusive fitness community. State-of-the-art equipment, world-class trainers, and an atmosphere that demands results.
          </motion.p>
          
          <motion.div variants={fadeUpVariant} className="home-buttons">
            <Button variant="primary" size="lg" glow>
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              View Programs
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - Visual Graphic */}
        <motion.div 
          className="home-visual-col"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="home-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000" 
              alt="Fitness Equipment" 
              className="home-hero-image"
            />
            <div className="image-overlay-gradient"></div>
            
            {/* Floater Element */}
            <motion.div 
              className="hero-floater"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="floater-val">24/7</span>
              <span className="floater-label">Access</span>
            </motion.div>
          </div>
        </motion.div>
      </Container>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="scroll-text">Scroll to explore</span>
        <div className="mouse">
          <motion.div 
            className="mouse-wheel"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
