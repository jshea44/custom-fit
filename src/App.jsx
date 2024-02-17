import React, { useState } from 'react';
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  const [getWorkouts, setWorkouts] = useState([]);

  const addWorkout = (newWorkout) => {
    setWorkouts([...getWorkouts, newWorkout]);
  };

  return (
    <>
      <Header />
      <h1>Custom Fit</h1>
      <Home workouts={getWorkouts} />
    </>
  );
}

export default App;
