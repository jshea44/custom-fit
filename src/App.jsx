import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import CreateWorkout from './Components/CreateWorkout';
import Workout from './Components/Workout';
import Footer from './Components/Footer';
import UserLogin from './Components/UserLogin';
import './App.css';

function App() {
  const [homeComponent, setHomeComponent] = useState(false);
  const [createWorkoutComponent, setCreateWorkoutComponent] = useState(false);
  const [workoutComponent, setWorkoutComponent] = useState(false);
  const [workoutId, setWorkoutId] = useState(null);
  const [loginPage, setLoginPage] = useState(true);

  const handleCreateWorkoutClick = () => {
    setCreateWorkoutComponent(true);
    setHomeComponent(false);
  };

  const handleWorkoutClick = (workoutId) => {
    setHomeComponent(false);
    setWorkoutComponent(true);
    setWorkoutId(workoutId);
  };

  const handleHomeButtonClick = () => {
    setHomeComponent(true);
    setCreateWorkoutComponent(false);
    setWorkoutComponent(false);
    setWorkoutId(null);
  };

  const handleLoginClick = () => {
    setLoginPage(false);
    setHomeComponent(true);
  };

  return (
    <BrowserRouter>
      {loginPage ? (
        <UserLogin loginClick={handleLoginClick} />
      ) : (
        <>
          <Header onHomeButtonClick={handleHomeButtonClick} />
          {homeComponent && (
            <Home
              onCreateWorkoutClick={handleCreateWorkoutClick}
              onWorkoutClick={handleWorkoutClick}
            />
          )}
          {createWorkoutComponent && (
            <CreateWorkout onCancelButtonClick={handleHomeButtonClick} />
          )}
          {workoutComponent && (
            <Workout
              onDeleteButtonClick={handleHomeButtonClick}
              workoutId={workoutId}
            />
          )}
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
