import { ShieldCheck, Target, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Discover the legacy and vision of Green Heights Egypt American School.</p>
        </div>
      </div>

      <section className="about-content container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p>
              Founded with the vision to provide world-class education, Green Heights Egypt American School has been at the forefront of academic innovation and character development. Our inclusive community embraces diversity and encourages students to explore their passions.
            </p>
            <p>
              We follow a rigorous American curriculum built on the Common Core standards, blending academic excellence with a rich program of arts, athletics, and extracurriculars. 
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>Campus Life</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="feature-icon-wrapper">
                <Target size={32} />
              </div>
              <h3>Our Mission</h3>
              <p>To empower students to achieve academic excellence, become lifelong learners, and develop into responsible global citizens ready to make a positive impact.</p>
            </div>
            
            <div className="mission-card delay-100">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={32} />
              </div>
              <h3>Our Vision</h3>
              <p>To be recognized as a leading educational institution that nurtures innovation, leadership, and ethical values in every student.</p>
            </div>

            <div className="mission-card delay-200">
              <div className="feature-icon-wrapper">
                <Heart size={32} />
              </div>
              <h3>Core Values</h3>
              <p>Integrity, Respect, Empathy, Excellence, and Collaboration are the pillars of our school's culture.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
