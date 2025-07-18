import React, { useState } from 'react';
import './ProgressTracker.css';

const ProgressTracker = () => {
  const [entries, setEntries] = useState([]);
  const [workout, setWorkout] = useState('');
  const [steps, setSteps] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleAddEntry = () => {
    if (workout.trim() === '' && steps.trim() === '') {
      alert('Please enter either a workout or steps');
      return;
    }

    const newEntry = {
      date,
      workout,
      steps: steps ? parseInt(steps) : 0,
    };

    setEntries([newEntry, ...entries]);
    setWorkout('');
    setSteps('');
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">📈 Your Progress Tracker</h2>

      <div className="card p-4 shadow">
        <div className="row mb-3">
          <div className="col-md-4 mb-2">
            <label>Date</label>
            <input
              type="date"
              value={date}
              className="form-control"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="col-md-4 mb-2">
            <label>Workout Completed</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g., Yoga, Cardio"
              value={workout}
              onChange={(e) => setWorkout(e.target.value)}
            />
          </div>
          <div className="col-md-4 mb-2">
            <label>Steps Walked</label>
            <input
              type="number"
              className="form-control"
              placeholder="e.g., 5000"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            />
          </div>
        </div>

        <button className="btn btn-success w-100" onClick={handleAddEntry}>
          ➕ Add Entry
        </button>
      </div>

      <div className="mt-4">
        <h4>📅 Progress Log</h4>
        {entries.length === 0 ? (
          <p className="text-muted">No entries yet.</p>
        ) : (
          <ul className="list-group">
            {entries.map((entry, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between">
                <strong>{entry.date}</strong>
                <span>{entry.workout ? `Workout: ${entry.workout}` : ''}</span>
                <span>{entry.steps > 0 ? `Steps: ${entry.steps}` : ''}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProgressTracker;