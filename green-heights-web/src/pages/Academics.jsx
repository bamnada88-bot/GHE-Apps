import { BookOpen, GraduationCap, Microscope, Palette, Compass, Star, Users, BrainCircuit } from 'lucide-react';
import './Academics.css';

const Academics = () => {
  const stages = [
    {
      id: 'kindergarten',
      title: 'Kindergarten',
      icon: <Star className="stage-icon" />,
      description: 'A nurturing environment where curiosity blooms. We focus on play-based learning, social skills, and foundational literacy.',
      highlights: ['Montessori-inspired', 'Creative Arts', 'Basic Phonics']
    },
    {
      id: 'elementary',
      title: 'Elementary',
      icon: <BookOpen className="stage-icon" />,
      description: 'Building a strong academic foundation while encouraging independent thought and collaborative projects.',
      highlights: ['Core Subjects Mastery', 'STEM Introduction', 'Physical Education']
    },
    {
      id: 'middle',
      title: 'Middle School',
      icon: <Compass className="stage-icon" />,
      description: 'Guiding students through transition years with a rigorous curriculum, character building, and critical thinking.',
      highlights: ['Advanced Math & Science', 'Foreign Languages', 'Leadership Skills']
    },
    {
      id: 'high',
      title: 'High School',
      icon: <GraduationCap className="stage-icon" />,
      description: 'College preparatory courses tailored to individual student goals. Fostering excellence and global citizenship.',
      highlights: ['AP Courses', 'College Counseling', 'Advanced Arts & Tech']
    }
  ];

  const features = [
    { title: 'STEAM Integration', icon: <Microscope size={32}/>, desc: 'Seamlessly blending Science, Tech, Engineering, Arts, and Math in daily learning.' },
    { title: 'Creative Arts', icon: <Palette size={32}/>, desc: 'Cultivating imagination through visual arts, music, and dramatic performances.' },
    { title: 'Global Citizenship', icon: <Users size={32}/>, desc: 'Teaching cultural empathy, ethics, and responsibility towards our world.' },
    { title: 'Innovation Labs', icon: <BrainCircuit size={32}/>, desc: 'State-of-the-art facilities designed for robotics, coding, and hands-on discovery.' }
  ];

  return (
    <div className="academics-page">
      {/* Hero Section */}
      <section className="academics-hero">
        <div className="academics-hero-content animate-fade-in">
          <h1 className="hero-title">Excellence in Education</h1>
          <p className="hero-subtitle">
            Empowering the next generation of leaders, thinkers, and creators through a holistic American curriculum.
          </p>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section container">
        <div className="section-header text-center">
          <h2>Our Academic Philosophy</h2>
          <div className="heading-underline"></div>
          <p className="section-desc">
            At Green Heights American School, we believe that every student has unique potential. Our curriculum is designed to challenge, inspire, and support students at every stage of their journey.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card glass-surface animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stages Section */}
      <section className="stages-section">
        <div className="container">
          <div className="section-header text-center text-white">
            <h2 style={{color: 'white'}}>Educational Stages</h2>
            <div className="heading-underline bg-white"></div>
          </div>
          
          <div className="stages-grid">
            {stages.map((stage, idx) => (
              <div key={idx} className="stage-card">
                <div className="stage-card-inner">
                  <div className="stage-card-front">
                    <div className="icon-container">
                      {stage.icon}
                    </div>
                    <h3>{stage.title}</h3>
                    <span className="hover-text">Hover to discover</span>
                  </div>
                  <div className="stage-card-back">
                    <h3>{stage.title}</h3>
                    <p>{stage.description}</p>
                    <ul className="stage-highlights">
                      {stage.highlights.map((hlt, i) => (
                        <li key={i}>{hlt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="academics-cta text-center container">
        <div className="cta-box glass-surface">
          <h2>Ready to Join Our Community?</h2>
          <p>Discover how our academic programs can shape your child's future.</p>
          <button className="btn btn-primary" style={{marginTop: '1.5rem'}}>
            <BookOpen size={20}/>
            Download Prospectus
          </button>
        </div>
      </section>
    </div>
  );
};

export default Academics;
