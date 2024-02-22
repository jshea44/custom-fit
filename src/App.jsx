import React, { useState } from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import CreateWorkout from './Components/CreateWorkout';

function App() {
  // const [workouts, setWorkouts] = useState([]);

  // const addWorkout = (newWorkout) => {
  //   setWorkouts([...workouts, newWorkout]);
  // };

  return (
    <>
      <Header />
      <hr />
      <Home />
      <hr />
      <CreateWorkout />
    </>
  );
}

export default App;
