import React from 'react';

const WorkoutPlan = () => {
  const userData = JSON.parse(localStorage.getItem('userData')) || {};

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🏋 Your Personalized Workout Plan</h2>
      <div className="card p-4 shadow">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Age:</strong> {userData.age}</p>
        <p><strong>Goal:</strong> {userData.goal}</p>
        <p><strong>Equipment:</strong> {userData.equipment}</p>
        <p><strong>Health Condition:</strong> {userData.healthCondition}</p>
        <p><strong>Height:</strong> {userData.height} cm</p>
        <hr />
        <p>💡 Your workout plan will be tailored soon based on this info.</p>
      </div>
    </div>
  );
};

export default WorkoutPlan;