import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import Card from '../../components/ui/Card';
import { programs } from '../../data/programs';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Programs.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

const Programs = () => {
  return (
    <section id="programs" className="programs section">
      <Container>
        <SectionTitle
          title="Training Programs"
          subtitle="Discover Your Discipline"
          centered={true}
        />
        
        <motion.div 
          className="programs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {programs.map((program) => (
            <motion.div key={program.id} variants={cardVariants}>
              <Card className="program-card">
                <div className="program-img-wrapper">
                  <img src={program.image} alt={program.title} className="program-img" />
                  <div className="program-icon-badge">
                    <program.icon size={24} />
                  </div>
                </div>
                <div className="program-content">
                  <h3 className="program-title">{program.title}</h3>
                  <p className="program-desc text-subtle">{program.description}</p>
                  <div className="program-link">
                    Learn More <ArrowRight size={18} />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Programs;
