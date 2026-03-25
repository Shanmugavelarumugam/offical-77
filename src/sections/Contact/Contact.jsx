import Container from '../../components/ui/Container';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <Container>
        <div className="contact-wrapper glass-panel">
          <div className="contact-info">
            <h2 className="heading-lg">Ready to Commit?</h2>
            <p className="text-subtle">
              Drop us a message below. Whether you want to schedule a tour, inquire about personal training, or start your trial, our team is ready to respond.
            </p>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" autoComplete="given-name" placeholder="John" required />
                </div>
                <div className="input-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" autoComplete="family-name" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" autoComplete="email" placeholder="john@example.com" required />
              </div>
              
              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" required defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option value="trial">Start Free Trial</option>
                  <option value="training">Personal Training Inquiry</option>
                  <option value="membership">Membership Details</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="How can we help you?" required></textarea>
              </div>
              
              <Button type="submit" variant="primary" size="lg" className="w-full" glow>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
