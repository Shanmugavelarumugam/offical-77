import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import { gallery } from '../../data/gallery';
import { motion } from 'framer-motion';
import './Gallery.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};


const Gallery = () => {
  return (
    <section id="gallery" className="gallery section">
      <Container>
        <SectionTitle
          title="Inside the Studio"
          subtitle="World-Class Facilities"
          centered={true}
        />

        <motion.div 
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {gallery.map((image, index) => (
            <motion.div 
              key={image.id} 
              variants={itemVariants}
              className={`gallery-item item-${index + 1}`}
            >
              <div className="gallery-img-wrapper">
                <img src={image.url} alt={image.title} loading="lazy" />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Gallery;
