import { useState } from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import CreateWorkout from './Components/CreateWorkout';
import Workout from './Components/Workout';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [homeComponent, setHomeComponent] = useState(true);
  const [createWorkoutComponent, setCreateWorkoutComponent] = useState(false);
  const [workoutComponent, setWorkoutComponent] = useState(false);

  const handleCreateWorkoutClick = () => {
    setCreateWorkoutComponent(true);
    setHomeComponent(false);
  };

  const handleWorkoutClick = () => {
    setHomeComponent(false);
    setWorkoutComponent(true);
  };

  const handleHomeButtonClick = () => {
    setHomeComponent(true);
    setCreateWorkoutComponent(false);
    setWorkoutComponent(false);
  };

  return (
    <>
      <Header onHomeButtonClick={handleHomeButtonClick} />
      {homeComponent && (
        <Home
          onCreateWorkoutClick={handleCreateWorkoutClick}
          onWorkoutClick={handleWorkoutClick}
        />
      )}
      {createWorkoutComponent && <CreateWorkout />}
      {workoutComponent && <Workout />}
      <Footer />
    </>
  );
}

export default App;
