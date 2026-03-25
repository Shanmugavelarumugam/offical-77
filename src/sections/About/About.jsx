import Container from '../../components/ui/Container';
import { Target, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

const features = [
  {
    icon: Target,
    title: 'Goal Oriented',
    description: 'Every program is designed with a specific outcome in mind. We do not do random workouts.'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Advanced metrics and regular assessments keep you on the path to success.'
  },
  {
    icon: Users,
    title: 'Elite Community',
    description: 'Surround yourself with individuals who push you to be better every single day.'
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
};

const About = () => {
  return (
    <section id="about" className="about section">
      <Container>
        <div className="about-grid">
          {/* Images */}
          <motion.div 
            className="about-images"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn} className="img-wrapper main-img">
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800" alt="Gym floor" />
            </motion.div>
            <motion.div variants={scaleIn} className="img-wrapper secondary-img glass-panel">
              <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800" alt="Training" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="subtitle text-gradient">About Our Studio</motion.span>
            <motion.h2 variants={fadeUp} className="heading-lg">More Than Just a Gym. <br /> A Training Facility.</motion.h2>
            <motion.p variants={fadeUp} className="about-desc text-subtle">
              Founded in 2020, 77 Fitness Studio was built on a simple premise: provide the best equipment, the most knowledgeable coaches, and an environment that breeds success. We strip away the unnecessary and focus purely on what gets results.
            </motion.p>

            <motion.div variants={staggerContainer} className="features-list">
              {features.map((feature, index) => (
                <motion.div variants={fadeUp} className="feature-item" key={index}>
                  <div className="feature-icon-wrapper">
                    <feature.icon className="feature-icon" size={24} />
                  </div>
                  <div className="feature-text">
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="text-subtle">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
