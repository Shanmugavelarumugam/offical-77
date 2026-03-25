import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import Card from '../../components/ui/Card';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { trainers } from '../../data/trainers';
import './Trainers.css';

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

const Trainers = () => {
  return (
    <section id="trainers" className="trainers section">
      <Container>
        <SectionTitle
          title="Our Expert Coaches"
          subtitle="Learn from the Best"
          centered={true}
        />

        <motion.div 
          className="trainers-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {trainers.map((trainer) => (
            <motion.div key={trainer.id} variants={cardVariants}>
              <Card className="trainer-card" hoverEffect={false}>
                <div className="trainer-img-wrapper">
                  <img src={trainer.image} alt={trainer.name} className="trainer-img" />
                  <div className="trainer-socials">
                    {trainer.socials.instagram && (
                      <a href={trainer.socials.instagram} className="trainer-social-link">
                        <Instagram size={20} />
                      </a>
                    )}
                    {trainer.socials.twitter && (
                      <a href={trainer.socials.twitter} className="trainer-social-link">
                        <Twitter size={20} />
                      </a>
                    )}
                    {trainer.socials.linkedin && (
                      <a href={trainer.socials.linkedin} className="trainer-social-link">
                        <Linkedin size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="trainer-info">
                  <h3 className="trainer-name">{trainer.name}</h3>
                  <p className="trainer-role text-gradient">{trainer.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Trainers;
