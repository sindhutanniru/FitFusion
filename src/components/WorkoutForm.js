import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WorkoutForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    healthCondition: '',
    goal: '',
    equipment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just log the data and navigate
    console.log('User Data:', formData);
    navigate('/meal-planner'); // you can change this to a dashboard later
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">👤 Your Fitness Details</h2>
      <form className="card p-4 shadow" onSubmit={handleSubmit}>
        <div className="row">
          {['name', 'age', 'weight', 'height'].map((field) => (
            <div className="col-md-6 mb-3" key={field}>
              <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === 'age' || field === 'weight' || field === 'height' ? 'number' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          ))}

          <div className="col-md-6 mb-3">
            <label className="form-label">Health Condition</label>
            <select
              name="healthCondition"
              value={formData.healthCondition}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">Select</option>
              <option value="PCOS">PCOS</option>
              <option value="PCOD">PCOD</option>
              <option value="Thyroid">Thyroid</option>
              <option value="None">None</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Fitness Goal</label>
            <input
              type="text"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              placeholder="e.g., Weight Loss"
              className="form-control"
              required
            />
          </div>

          <div className="col-md-12 mb-4">
            <label className="form-label">Available Equipment</label>
            <input
              type="text"
              name="equipment"
              value={formData.equipment}
              onChange={handleChange}
              placeholder="e.g., Dumbbells, Resistance Band"
              className="form-control"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          🚀 Generate My Plan
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;