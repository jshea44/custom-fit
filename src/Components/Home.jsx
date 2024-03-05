import { Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
const API_SERVER = import.meta.env.VITE_APP_API;
// import Workout from './Workout';

function Home({ onCreateWorkoutClick, onWorkoutClick }) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get(`${API_SERVER}/workout`);
        setWorkouts(response.data);
      } catch (error) {
        console.error('Error fetching workouts', error);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div>
      <h2>Workouts</h2>

      <Button variant="contained" onClick={onCreateWorkoutClick}>
        Create Workout
      </Button>

      <Stack spacing={2} direction={'column'}>
        {workouts.map((workout, _id) => (
          <Button onClick={onWorkoutClick} key={_id}>
            {workout.name}
          </Button>
        ))}
      </Stack>
    </div>
  );
}

export default Home;
