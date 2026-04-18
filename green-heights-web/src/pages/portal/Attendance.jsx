import './Attendance.css';
import { ShieldCheck, AlertCircle } from 'lucide-react';

const Attendance = () => {
  const subjects = [
    { name: 'Mathematics', percentage: 95, color: '#3b82f6' },
    { name: 'Science', percentage: 88, color: '#22c55e' },
    { name: 'English Literature', percentage: 100, color: '#8b5cf6' },
    { name: 'Physical Education', percentage: 75, color: '#f59e0b' },
    { name: 'Art', percentage: 92, color: '#ec4899' },
    { name: 'History', percentage: 65, color: '#ef4444' }
  ];

  return (
    <div className="attendance-page">
      <div className="page-header">
        <h2>Attendance Record</h2>
        <p>Monitor your child's presence across different subjects.</p>
      </div>

      <div className="attendance-summary-cards">
        <div className="summary-card">
          <ShieldCheck size={32} className="text-green" />
          <div className="summary-info">
            <span className="summary-value">92%</span>
            <span className="summary-label">Overall Attendance</span>
          </div>
        </div>
        <div className="summary-card">
          <AlertCircle size={32} className="text-orange" />
          <div className="summary-info">
            <span className="summary-value">3</span>
            <span className="summary-label">Total Absences</span>
          </div>
        </div>
      </div>

      <div className="attendance-list glass-surface">
        {subjects.map((sub, idx) => (
          <div key={idx} className="subject-item">
            <div className="subject-header">
              <span className="subject-name">{sub.name}</span>
              <span className="subject-percentage" style={{color: sub.color}}>{sub.percentage}%</span>
            </div>
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${sub.percentage}%`, backgroundColor: sub.color }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
