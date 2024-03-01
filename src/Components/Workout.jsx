import React from 'react';
import { Box } from '@mui/material';
function Workout() {
  const sampleExercises = [
    {
      name: 'pullups',
      sets: '3',
      reps: '10',
      _id: 1,
    },
    {
      name: 'pushups',
      sets: '3',
      time: '15 seconds',
      _id: 2,
    },
  ];

  return (
    <div>
      {sampleExercises.map((exercise, _id) => (
        <Box key={_id} sx={{ border: 'solid red 2px', margin: '5px' }}>
          <p>{exercise.name}</p>
          <p>{exercise.sets}</p>
          <p>{exercise.reps}</p>
          <p>{exercise.weight}</p>
          <p>{exercise.time}</p>
          <p>{exercise.distance}</p>
          <p>{exercise.description}</p>
        </Box>
      ))}
    </div>
  );
}

export default Workout;
