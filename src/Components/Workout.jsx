import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import axios from 'axios';
const API_SERVER = import.meta.env.VITE_APP_API;

function Workout({ workoutId, onDeleteButtonClick }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(`${API_SERVER}/workout/${workoutId}`);
        setExercises(response.data.exercises);
      } catch (error) {
        console.error('Error fetching exercises', error);
      }
    };
    fetchExercises();
  }, [workoutId]);

  const handleDeleteWorkoutClick = async () => {
    try {
      await axios.delete(`${API_SERVER}/workout/${workoutId}`);
      onDeleteButtonClick();
    } catch (error) {
      console.error('Error deleting workout', error);
    }
  };

  return (
    <div>
      <Button type="button" variant="contained">
        EDIT
      </Button>
      <Button
        onClick={handleDeleteWorkoutClick}
        type="button"
        variant="outlined"
        color="error"
      >
        DELETE
      </Button>
      {exercises.map((exercise, _id) => (
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
