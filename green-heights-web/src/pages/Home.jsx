import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title delay-100">
            Empowering Minds,<br />
            <span className="text-secondary">Shaping the Future</span>
          </h1>
          <p className="hero-subtitle delay-200">
            Welcome to Green Heights Egypt American School. We foster academic excellence, character development, and global citizenship in a vibrant learning community.
          </p>
          <div className="hero-actions delay-300">
            <button className="btn btn-secondary">
              Apply Now <ArrowRight size={18} />
            </button>
            <button className="btn btn-outline glass-btn">
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Choose Green Heights?</h2>
            <p className="section-subtitle">A tradition of excellence, a commitment to innovation.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <BookOpen size={32} className="feature-icon" />
              </div>
              <h3>American Curriculum</h3>
              <p>Rigorous, standards-based american curriculum designed to prepare students for top universities worldwide.</p>
            </div>
            
            <div className="feature-card delay-100">
              <div className="feature-icon-wrapper">
                <Users size={32} className="feature-icon" />
              </div>
              <h3>Expert Faculty</h3>
              <p>Highly qualified and passionate educators dedicated to nurturing each student's unique potential.</p>
            </div>

            <div className="feature-card delay-200">
              <div className="feature-icon-wrapper">
                <Trophy size={32} className="feature-icon" />
              </div>
              <h3>Holistic Development</h3>
              <p>Comprehensive extracurricular programs fostering leadership, sportsmanship, and creativity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container stats-container">
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">University Acceptance</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Extracurricular Activities</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15:1</span>
            <span className="stat-label">Student to Teacher Ratio</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years of Excellence</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
