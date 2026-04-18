import './Schedule.css';

const Schedule = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  const periods = ['1st (8:00)', '2nd (9:00)', 'Break', '3rd (10:30)', '4th (11:30)', '5th (12:30)'];

  const timetable = {
    'Sunday': ['Math', 'Science', 'Break', 'English', 'P.E', 'Art'],
    'Monday': ['Science', 'Math', 'Break', 'History', 'English', 'Computer'],
    'Tuesday': ['English', 'Music', 'Break', 'Math', 'Science', 'French'],
    'Wednesday': ['History', 'French', 'Break', 'P.E', 'Math', 'English'],
    'Thursday': ['Art', 'Computer', 'Break', 'Science', 'Music', 'Math']
  };

  const getSubjectColor = (subject) => {
    switch(subject) {
      case 'Math': return '#3b82f6';
      case 'Science': return '#22c55e';
      case 'English': return '#8b5cf6';
      case 'History': return '#f59e0b';
      case 'P.E': return '#ec4899';
      case 'Art': return '#14b8a6';
      case 'Computer': return '#6366f1';
      case 'Music': return '#f43f5e';
      case 'French': return '#06b6d4';
      case 'Break': return '#e2e8f0';
      default: return '#e2e8f0';
    }
  };

  return (
    <div className="schedule-page">
      <div className="page-header">
        <h2>Weekly Schedule</h2>
      </div>

      <div className="table-responsive">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Day</th>
              {periods.map(p => <th key={p}>{p}</th>)}
            </tr>
          </thead>
          <tbody>
            {days.map(day => (
              <tr key={day}>
                <td className="day-cell">{day}</td>
                {timetable[day].map((subject, idx) => (
                  <td key={idx}>
                    <div 
                      className="subject-block"
                      style={{
                        backgroundColor: subject === 'Break' ? '#f1f5f9' : `${getSubjectColor(subject)}20`,
                        color: subject === 'Break' ? '#94a3b8' : getSubjectColor(subject),
                        borderLeft: subject === 'Break' ? 'none' : `3px solid ${getSubjectColor(subject)}`
                      }}
                    >
                      {subject}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
