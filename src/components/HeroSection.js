import React from 'react';

function HeroSection({ onStartClick }) {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 fw-bold text-primary">Welcome to FitFusion 💪</h1>
      <p className="lead">Your AI-driven Fitness & Wellness Platform</p>
      <button className="btn btn-success mt-3 px-4 py-2" onClick={onStartClick}>
        Start Your Journey
      </button>
    </div>
  );
}

export default HeroSection;