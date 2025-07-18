import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import WorkoutForm from './components/WorkoutForm';
import MealPlanner from './components/MealPlanner';
import ProgressTracker from './components/ProgressTracker';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Show navbar on all pages */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/details" element={<WorkoutForm />} />
        <Route path="/meal-planner" element={<MealPlanner />} />
        <Route path="/progress" element={<ProgressTracker />} />
      </Routes>
    </Router>
  );
}

export default App;