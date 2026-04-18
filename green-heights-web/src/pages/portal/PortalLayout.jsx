import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Home, UserCheck, GraduationCap, Activity, Calendar, Bell, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './PortalLayout.css';

const PortalLayout = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  const navLinks = [
    { to: '/portal/dashboard', icon: <Home size={20}/>, label: 'Dashboard' },
    { to: '/portal/attendance', icon: <UserCheck size={20}/>, label: 'Attendance' },
    { to: '/portal/grades', icon: <GraduationCap size={20}/>, label: 'Grades' },
    { to: '/portal/behavior', icon: <Activity size={20}/>, label: 'Behavior' },
    { to: '/portal/schedule', icon: <Calendar size={20}/>, label: 'Schedule' },
  ];

  return (
    <div className="portal-layout">
      {/* Mobile Header */}
      <div className="portal-mobile-header">
        <h2>GHE Portal</h2>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle-btn">
          {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`portal-sidebar ${mobileOpen ? 'open' : ''}`}>
        <div className="sidebar-header desktop-only">
          <h2>GHE Portal</h2>
        </div>
        <nav className="sidebar-nav">
          {navLinks.map(link => (
            <NavLink 
              key={link.to}
              to={link.to} 
              className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}
              onClick={() => setMobileOpen(false)}
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}
          <NavLink 
            to="/portal/notifications" 
            className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={() => setMobileOpen(false)}
          >
            <div className="nav-item-icon-wrapper">
              <Bell size={20}/>
              <span className="badge">3</span>
            </div>
            <span>Notifications</span>
          </NavLink>
        </nav>
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={20}/>
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="portal-main">
        <header className="portal-topbar">
          <div className="topbar-left">
            <h3 className="welcome-text">Welcome back!</h3>
          </div>
          <div className="topbar-right">
            <div className="student-selector">
              <span className="student-name">Ahmed (Grade 5)</span>
            </div>
            <div className="profile-avatar">A</div>
          </div>
        </header>
        <div className="portal-content">
          <div className="portal-container">
            <Outlet />
          </div>
        </div>
      </main>

      {mobileOpen && <div className="sidebar-overlay" onClick={() => setMobileOpen(false)}></div>}
    </div>
  );
};

export default PortalLayout;
