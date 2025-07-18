import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">FitFusion</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">🏠 Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/meal-planner">🍽 Meal Planner</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/progress">📈 Progress Tracker</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;