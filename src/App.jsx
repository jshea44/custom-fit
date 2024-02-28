import { useState } from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import CreateWorkout from './Components/CreateWorkout';
import Workout from './Components/Workout';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showCreateWorkout, setShowCreateWorkout] = useState(false);
  const [showWorkout, setShowWorkout] = useState(false);

  const handleCreateWorkoutClick = () => {
    setShowCreateWorkout(true);
    setShowHome(false);
  };

  const handleWorkoutClick = () => {
    setShowHome(false);
    setShowWorkout(true);
  };
  return (
    <>
      <Header />
      {showHome && (
        <Home
          onCreateWorkoutClick={handleCreateWorkoutClick}
          onWorkoutClick={handleWorkoutClick}
        />
      )}
      {showCreateWorkout && <CreateWorkout />}
      {showWorkout && <Workout />}
      <Footer />
    </>
  );
}

export default App;
