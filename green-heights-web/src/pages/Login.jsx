import { useState } from 'react';
import { Mail, Lock, User, Shield, KeyRound, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [portalType, setPortalType] = useState('student'); // student, parent, staff
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app we'd authenticate here.
    navigate('/portal/dashboard');
  };

  const getPortalDetails = () => {
    switch(portalType) {
      case 'student': return { title: 'Student Portal', icon: <User size={48} className="portal-icon"/>, color: 'var(--primary-color)' };
      case 'parent': return { title: 'Parent Portal', icon: <Shield size={48} className="portal-icon"/>, color: 'var(--accent-color)' };
      case 'staff': return { title: 'Staff Portal', icon: <KeyRound size={48} className="portal-icon"/>, color: 'var(--secondary-color)' };
      default: return { title: 'Student Portal', icon: <User size={48} className="portal-icon"/>, color: 'var(--primary-color)' };
    }
  };

  const currentPortal = getPortalDetails();

  return (
    <div className="login-page">
      <div className="login-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="container login-container">
        <div className="login-card glass-surface animate-fade-in">
          
          <div className="login-header">
            <div className="portal-icon-container" style={{color: currentPortal.color}}>
              {currentPortal.icon}
            </div>
            <h2>{currentPortal.title}</h2>
            <p>Welcome back to Green Heights</p>
          </div>

          <div className="portal-selector">
            <button 
              className={`portal-btn ${portalType === 'student' ? 'active' : ''}`}
              onClick={() => setPortalType('student')}
            >
              Student
            </button>
            <button 
              className={`portal-btn ${portalType === 'parent' ? 'active' : ''}`}
              onClick={() => setPortalType('parent')}
            >
              Parent
            </button>
            <button 
              className={`portal-btn ${portalType === 'staff' ? 'active' : ''}`}
              onClick={() => setPortalType('staff')}
            >
              Staff
            </button>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <Mail size={20} className="input-icon" />
                <input 
                  type="email" 
                  placeholder="Enter your school email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock size={20} className="input-icon" />
                <input 
                  type="password" 
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="login-submit-btn" style={{backgroundColor: currentPortal.color}}>
              <span>Sign In</span>
              <ArrowRight size={20} />
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
