import React, { useState } from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import CreateWorkout from './Components/CreateWorkout';
import Workout from './Components/Workout';

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
      <hr />
      {showHome && <Home onCreateWorkoutClick={handleCreateWorkoutClick} />}
      <hr />
      {showCreateWorkout && <CreateWorkout />}
      <hr />
      <Workout />
    </>
  );
}

export default App;
