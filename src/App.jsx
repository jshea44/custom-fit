import React, { useState } from 'react';
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  // const [workouts, setWorkouts] = useState([]);

  // const addWorkout = (newWorkout) => {
  //   setWorkouts([...workouts, newWorkout]);
  // };

  return (
    <>
      <Header />
      <h1>Custom Fit</h1>
      <Home />
    </>
  );
}

export default App;
