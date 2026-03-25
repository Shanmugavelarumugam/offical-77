import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Check } from 'lucide-react';
import { plans } from '../../data/plans';
import { cx } from '../../utils/helpers';
import { motion } from 'framer-motion';
import './Plans.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

const Plans = () => {
  return (
    <section id="plans" className="plans section">
      <div className="plans-bg-glow"></div>
      <Container position="relative">
        <SectionTitle
          title="Membership Plans"
          subtitle="Invest in Yourself"
          centered={true}
        />

        <motion.div 
          className="plans-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {plans.map((plan) => (
            <motion.div key={plan.id} variants={cardVariants} className="plan-wrapper">
              <Card 
                className={cx('plan-card', plan.isPopular && 'popular')}
                glass={!plan.isPopular}
              >
                {plan.isPopular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price-wrapper">
                    <span className="plan-price">{plan.price}</span>
                    <span className="plan-period">{plan.period}</span>
                  </div>
                  <p className="plan-desc text-subtle">{plan.description}</p>
                </div>
                
                <div className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="plan-feature">
                      <Check className="feature-check" size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="plan-footer">
                  <Button 
                    variant={plan.isPopular ? 'primary' : 'outline'} 
                    glow={plan.isPopular}
                    className="w-full"
                    size="lg"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Plans;
