import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/details');
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to <span className="highlight">FitFusion</span></h1>
      <p>Your AI-driven fitness & wellness companion.</p>
      <button onClick={handleStart} className="start-button">Start Your Journey</button>
    </div>
  );
};

export default WelcomePage;