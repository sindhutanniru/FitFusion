import React, { useState } from 'react';

const MealPlanner = () => {
  const [mode, setMode] = useState('default'); // 'default' or 'custom'
  const [customInput, setCustomInput] = useState('');
  const [customMeals, setCustomMeals] = useState([]);

  const defaultPlans = [
    {
      day: 'Monday',
      meals: {
        Breakfast: 'Oats with fruits',
        Lunch: 'Brown rice, dal, salad',
        Snacks: 'Sprouts or a banana',
        Dinner: 'Grilled paneer with vegetables'
      }
    },
    {
      day: 'Tuesday',
      meals: {
        Breakfast: 'Smoothie with spinach and banana',
        Lunch: 'Chapati with mixed veg curry',
        Snacks: 'Carrot sticks with hummus',
        Dinner: 'Quinoa with sautéed vegetables'
      }
    }
  ];

  const generateMealPlanFromIngredients = (ingredients) => {
    const ing = ingredients.map(i => i.toLowerCase());
    const getItem = (...items) =>
      items.find(i => ing.includes(i)) || items[0]; // Pick first match or fallback

    return {
      Breakfast: getItem('banana', 'apple', 'oats', 'eggs') + ' with oats or smoothie',
      Lunch: getItem('rice', 'quinoa', 'millet') + ' with ' + getItem('dal', 'chickpeas', 'paneer'),
      Snacks: getItem('cucumber', 'carrot', 'nuts', 'sprouts'),
      Dinner: getItem('chapati', 'roti', 'salad') + ' with ' + getItem('vegetables', 'paneer', 'dal')
    };
  };

  const handleCustomSubmit = () => {
    if (customInput.trim() !== '') {
      const items = customInput.split(',').map(item => item.trim());
      const mealPlan = generateMealPlanFromIngredients(items);
      setCustomMeals([mealPlan]);
      setCustomInput('');
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Meal Planner</h2>

      <div className="mb-4 text-center">
        <button
          className={`btn me-2 ${mode === 'default' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setMode('default')}
        >
          Default Meal Plans
        </button>
        <button
          className={`btn ${mode === 'custom' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setMode('custom')}
        >
          Custom Meal Planner
        </button>
      </div>

      {mode === 'default' ? (
        <div>
          {defaultPlans.map((plan, index) => (
            <div key={index} className="card mb-3">
              <div className="card-header fw-bold">{plan.day}</div>
              <div className="card-body">
                {Object.entries(plan.meals).map(([mealType, item]) => (
                  <p key={mealType}>
                    <strong>{mealType}:</strong> {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="mb-3">
            <label htmlFor="customInput" className="form-label fw-bold">
              Enter available ingredients (comma separated):
            </label>
            <input
              type="text"
              id="customInput"
              className="form-control"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="e.g., oats, banana, dal, carrot, rice"
            />
          </div>
          <button className="btn btn-success mb-3" onClick={handleCustomSubmit}>
            Generate Custom Meal Plan
          </button>

          {customMeals.length > 0 && (
            <div className="card">
              <div className="card-header fw-bold">Your Custom Meal Plan</div>
              <div className="card-body">
                {Object.entries(customMeals[0]).map(([mealType, item]) => (
                  <p key={mealType}>
                    <strong>{mealType}:</strong> {item}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MealPlanner;
