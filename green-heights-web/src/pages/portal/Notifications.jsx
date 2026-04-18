import { Bell, Info, CheckCircle, AlertCircle } from 'lucide-react';
import './Notifications.css';

const Notifications = () => {
  const notifications = [
    { id: 1, type: 'alert', title: 'Upcoming Parent-Teacher Meeting', desc: 'Please book your slot for the upcoming meeting on Oct 20th.', time: '2 hours ago', read: false },
    { id: 2, type: 'info', title: 'New Grade Posted', desc: 'Science mid-term grades are now available.', time: '5 hours ago', read: false },
    { id: 3, type: 'success', title: 'Payment Confirmed', desc: 'Tuition fee for Semester 1 has been received.', time: '1 day ago', read: false },
    { id: 4, type: 'info', title: 'School Trip Deadline', desc: 'Reminder: Deadline for the Alexandria trip permission slip is tomorrow.', time: '2 days ago', read: true },
    { id: 5, type: 'alert', title: 'Bus Route Delay', desc: 'Route 5 is experiencing a 15-minute delay due to traffic.', time: '3 days ago', read: true }
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'alert': return <AlertCircle size={24} className="text-orange" />;
      case 'success': return <CheckCircle size={24} className="text-green" />;
      default: return <Info size={24} className="text-blue" />;
    }
  };

  return (
    <div className="notifications-page">
      <div className="page-header">
        <h2>Notifications</h2>
        <button className="mark-all-btn">Mark all as read</button>
      </div>

      <div className="notifications-list">
        {notifications.map(notif => (
          <div key={notif.id} className={`notification-card ${notif.read ? 'read' : 'unread'}`}>
            <div className="notif-icon">
              {getIcon(notif.type)}
            </div>
            <div className="notif-content">
              <h4>{notif.title}</h4>
              <p>{notif.desc}</p>
              <span className="notif-time">{notif.time}</span>
            </div>
            {!notif.read && <div className="unread-dot"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
