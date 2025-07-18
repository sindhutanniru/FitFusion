import React, { useState } from 'react';

const plans = {
  'PCOD/PCOS': {
    exercises: [
      '🧘 Yoga (20 mins)',
      '🚶 Brisk Walk (30 mins)',
      '🏋‍♀ Light Strength Training (15 mins)',
      '🧎 Stretching (10 mins)'
    ],
    meals: [
      '🥗 Breakfast: Oats with chia seeds and berries',
      '🍲 Lunch: Quinoa salad with boiled chickpeas and greens',
      '🥒 Snacks: Roasted almonds + cucumber',
      '🍛 Dinner: Grilled paneer with sautéed vegetables'
    ]
  },
  'Thyroid': {
    exercises: [
      '🧘 Yoga (15 mins)',
      '🚶 Moderate Walk (25 mins)',
      '🚴 Stationary Cycling (20 mins)',
      '🧎 Breathing Exercises (10 mins)'
    ],
    meals: [
      '🍳 Breakfast: Boiled egg with spinach toast',
      '🥗 Lunch: Brown rice with dal and veggies',
      '🍎 Snacks: Apple slices with peanut butter',
      '🍜 Dinner: Moong dal soup with multigrain roti'
    ]
  }
};

const HealthConditionPlanner = () => {
  const [condition, setCondition] = useState('PCOD/PCOS');

  return (
    <div className="container mt-4">
      <h2 className="text-center">🩺 Health-Specific Fitness & Diet Planner</h2>

      <div className="form-group mt-3">
        <label>Select your condition:</label>
        <select
          className="form-control"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        >
          <option value="PCOD/PCOS">PCOD / PCOS</option>
          <option value="Thyroid">Thyroid</option>
        </select>
      </div>

      <div className="mt-4">
        <h4>🏃‍♀ Recommended Exercises</h4>
        <ul className="list-group">
          {plans[condition].exercises.map((exercise, index) => (
            <li className="list-group-item" key={index}>{exercise}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h4>🥗 Suggested Meals</h4>
        <ul className="list-group">
          {plans[condition].meals.map((meal, index) => (
            <li className="list-group-item" key={index}>{meal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HealthConditionPlanner;