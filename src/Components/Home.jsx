import { Stack, Button } from '@mui/material';
import Workout from './Workout';

function Home({ workouts }) {
  return (
    <div>
      <h2>Workouts</h2>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Create Workout</Button>
      </Stack>
      <ul>
        {workouts.map((workout, index) => (
          <Workout key={index} workout={workout} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
