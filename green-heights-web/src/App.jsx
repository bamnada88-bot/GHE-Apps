import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Login from './pages/Login';

// Portal Components
import PortalLayout from './pages/portal/PortalLayout';
import Dashboard from './pages/portal/Dashboard';
import Attendance from './pages/portal/Attendance';
import Grades from './pages/portal/Grades';
import Behavior from './pages/portal/Behavior';
import Schedule from './pages/portal/Schedule';
import Notifications from './pages/portal/Notifications';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<div className="container" style={{paddingTop: '100px', minHeight: '60vh', textAlign: 'center'}}><h2>Contact Us</h2><p>Contact details coming soon.</p></div>} />
            
            <Route path="/portal" element={<PortalLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="grades" element={<Grades />} />
              <Route path="behavior" element={<Behavior />} />
              <Route path="schedule" element={<Schedule />} />
              <Route path="notifications" element={<Notifications />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
