import { ThumbsUp, ThumbsDown, Star, AlertTriangle } from 'lucide-react';
import './Behavior.css';

const Behavior = () => {
  const behaviorLog = [
    { id: 1, date: 'Oct 15, 2026', type: 'positive', points: '+5', reason: 'Helping a classmate with math homework.', teacher: 'Mr. John' },
    { id: 2, date: 'Oct 12, 2026', type: 'positive', points: '+10', reason: 'Exceptional answers during Science Q&A.', teacher: 'Ms. Sarah' },
    { id: 3, date: 'Oct 8, 2026', type: 'negative', points: '-2', reason: 'Talking during independent reading time.', teacher: 'Mrs. Davis' },
    { id: 4, date: 'Oct 1, 2026', type: 'positive', points: '+15', reason: 'Student of the Week Award!', teacher: 'Principal Office' }
  ];

  return (
    <div className="behavior-page">
      <div className="page-header">
        <h2>Behavior & Discipline</h2>
        <p>Total Points Balance: <strong className="points-balance">+28</strong></p>
      </div>

      <div className="timeline-container">
        {behaviorLog.map(log => (
          <div key={log.id} className={`timeline-item ${log.type}`}>
            <div className="timeline-icon">
              {log.type === 'positive' && (log.points === '+15' ? <Star size={20}/> : <ThumbsUp size={20}/>)}
              {log.type === 'negative' && <AlertTriangle size={20}/>}
            </div>
            <div className="timeline-content glass-surface">
              <div className="timeline-header">
                <span className="log-date">{log.date}</span>
                <span className={`log-points ${log.type}`}>{log.points}</span>
              </div>
              <p className="log-reason">{log.reason}</p>
              <span className="log-teacher">Reported by: {log.teacher}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Behavior;
