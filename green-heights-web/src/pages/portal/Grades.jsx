import { useState } from 'react';
import './Grades.css';

const Grades = () => {
  const [activeTerm, setActiveTerm] = useState('Term 1');

  const terms = ['Term 1', 'Term 2', 'Finals'];

  const gradesData = {
    'Term 1': [
      { subject: 'Mathematics', grade: 'A', percentage: 95, comments: 'Excellent problem solving.' },
      { subject: 'Science', grade: 'B+', percentage: 88, comments: 'Good lab work, needs more revision.' },
      { subject: 'English', grade: 'A-', percentage: 90, comments: 'Great essays this term.' },
    ],
    'Term 2': [
      { subject: 'Mathematics', grade: 'A-', percentage: 91, comments: 'Consistent performance.' },
      { subject: 'Science', grade: 'A', percentage: 94, comments: 'Huge improvement in physics.' },
      { subject: 'English', grade: 'B', percentage: 84, comments: 'Focus more on grammar.' },
    ],
    'Finals': [
      { subject: 'Mathematics', grade: 'A', percentage: 96, comments: 'Outstanding final project.' },
      { subject: 'Science', grade: 'A-', percentage: 91, comments: 'Solid understanding.' },
      { subject: 'English', grade: 'A-', percentage: 91, comments: 'Excellent creative writing.' },
    ]
  };

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return '#22c55e'; // Green
    if (grade.startsWith('B')) return '#3b82f6'; // Blue
    if (grade.startsWith('C')) return '#f59e0b'; // Orange
    return '#ef4444'; // Red
  };

  return (
    <div className="grades-page">
      <div className="page-header">
        <h2>Academic Performance</h2>
        <p>Current GPA: <strong style={{color: 'var(--primary-color)'}}>3.8 / 4.0</strong></p>
      </div>

      <div className="terms-selector">
        {terms.map(term => (
          <button 
            key={term}
            className={`term-btn ${activeTerm === term ? 'active' : ''}`}
            onClick={() => setActiveTerm(term)}
          >
            {term}
          </button>
        ))}
      </div>

      <div className="grades-table-container glass-surface">
        <table className="grades-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Percentage</th>
              <th>Grade</th>
              <th>Teacher Comments</th>
            </tr>
          </thead>
          <tbody>
            {gradesData[activeTerm].map((row, idx) => (
              <tr key={idx}>
                <td className="subject-cell">{row.subject}</td>
                <td>{row.percentage}%</td>
                <td>
                  <span className="grade-badge" style={{backgroundColor: getGradeColor(row.grade)}}>
                    {row.grade}
                  </span>
                </td>
                <td className="comments-cell">{row.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;
