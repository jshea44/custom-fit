import { Button, Stack } from '@mui/material';
// import Workout from './Workout';

const sampleWorkouts = [
  'Full-Body Mondays',
  'Chest & Back',
  'Pull, Push, and Legs',
  'Cardio Xtreme',
];

function Home({ onCreateWorkoutClick, onWorkoutClick }) {
  return (
    <div>
      <h2>Workouts</h2>

      <Button variant="contained" onClick={onCreateWorkoutClick}>
        Create Workout
      </Button>

      <Stack spacing={2} direction={'column'}>
        {sampleWorkouts.map((workout, index) => (
          <Button onClick={onWorkoutClick} key={index}>
            {workout}
          </Button>
        ))}
      </Stack>
    </div>
  );
}

export default Home;
