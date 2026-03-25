import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import Card from '../../components/ui/Card';
import { MapPin, Phone, Clock } from 'lucide-react';
import './Branches.css';

const branches = [
  {
    id: 1,
    name: 'Downtown HQ',
    address: '123 Fitness Ave, Suite 77, Metropolis, NY 10001',
    phone: '+1 (234) 567-8900',
    hours: 'Mon-Sun: 24 Hours',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Westside Protocol',
    address: '88 High Street, Westside District, NY 10012',
    phone: '+1 (234) 567-8901',
    hours: 'Mon-Sat: 5AM - 11PM',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800'
  }
];

const Branches = () => {
  return (
    <section id="branches" className="branches section">
      <Container>
        <div className="branches-grid">
          {branches.map(branch => (
            <Card key={branch.id} className="branch-card" glass>
              <div className="branch-img-wrapper">
                <img src={branch.image} alt={branch.name} />
              </div>
              <div className="branch-info">
                <h3 className="branch-title">{branch.name}</h3>
                <div className="info-item">
                  <MapPin className="info-icon" size={20} />
                  <span>{branch.address}</span>
                </div>
                <div className="info-item">
                  <Phone className="info-icon" size={20} />
                  <span>{branch.phone}</span>
                </div>
                <div className="info-item">
                  <Clock className="info-icon" size={20} />
                  <span>{branch.hours}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Branches;
