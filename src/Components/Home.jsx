import { Button, Stack } from '@mui/material';
// import Workout from './Workout';

const sampleWorkouts = [
  'Full-Body Mondays',
  'Chest & Back',
  'Pull, Push, and Legs',
  'Cardio Xtreme',
];

function Home() {
  return (
    <div>
      <h2>Workouts</h2>

      <Button variant="contained">Create Workout</Button>

      <Stack spacing={2} direction={'column'}>
        {sampleWorkouts.map((workout, index) => (
          <Button key={index}>{workout}</Button>
        ))}
      </Stack>
    </div>
  );
}

export default Home;
