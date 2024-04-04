import { List, ListItem, Divider, Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
const API_SERVER = import.meta.env.VITE_APP_API;

function CreateWorkout({ onCancelButtonClick }) {
  const [workoutName, setWorkoutName] = useState('');
  const [exercises, setExercises] = useState([
    {
      name: '',
      sets: '',
      reps: '',
      weight: '',
      time: '',
      distance: '',
      description: '',
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const newExercises = [...exercises];
    newExercises[index][field] = value;
    setExercises(newExercises);
  };

  const handleSubmit = async (e) => {
    e.preventDefault;
    try {
      const response = await axios.post(`${API_SERVER}/workout`, {
        name: workoutName,
        exercises,
      });
    } catch (error) {
      console.error('Error creating workout', error);
    }
  };

  const handleCancelButtonClick = () => {
    onCancelButtonClick();
  };

  const addExercise = () => {
    setExercises([
      ...exercises,
      {
        name: '',
        sets: '',
        reps: '',
        weight: '',
        time: '',
        distance: '',
        description: '',
      },
    ]);
  };

  const deleteLastExercise = () => {
    if (exercises.length > 1) {
      const updatedExercises = exercises.slice(0, -1);
      setExercises(updatedExercises);
    }
  };

  return (
    <div>
      <h2>Create Workout</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Workout Name"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
          sx={{ paddingBottom: 5 }}
        ></TextField>
        {exercises.map((exercise, index) => (
          <Box
            key={index}
            sx={{
              border: '2px solid grey',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <List>
              <ListItem>
                <TextField
                  label="Exercise Name"
                  value={exercise.name}
                  onChange={(e) => {
                    handleInputChange(index, 'name', e.target.value);
                  }}
                  sx={{ width: '25ch' }}
                ></TextField>
              </ListItem>
              <ListItem>
                <TextField
                  label="Sets"
                  value={exercise.sets}
                  onChange={(e) => {
                    handleInputChange(index, 'sets', e.target.value);
                  }}
                  sx={{ width: '25ch' }}
                ></TextField>
              </ListItem>
              <ListItem>
                <TextField
                  label="Reps"
                  value={exercise.reps}
                  onChange={(e) => {
                    handleInputChange(index, 'reps', e.target.value);
                  }}
                  sx={{ width: '25ch' }}
                ></TextField>
              </ListItem>
              <ListItem>
                <TextField
                  label="Weight"
                  value={exercise.weight}
                  onChange={(e) => {
                    handleInputChange(index, 'weight', e.target.value);
                  }}
                  sx={{ width: '25ch' }}
                ></TextField>
              </ListItem>
              <ListItem>
                <TextField
                  label="Time"
                  value={exercise.time}
                  onChange={(e) => {
                    handleInputChange(index, 'time', e.target.value);
                  }}
                  sx={{ width: '25ch' }}
                ></TextField>
              </ListItem>
              <ListItem>
                <TextField
                  label="Distance"
                  value={exercise.distance}
                  onChange={(e) => {
                    handleInputChange(index, 'distance', e.target.value);
                  }}
                  sx={{ width: '25ch' }}
                ></TextField>
              </ListItem>
              <ListItem>
                <TextField
                  label="Add a description..."
                  multiline
                  rows={4}
                  value={exercise.description}
                  onChange={(e) => {
                    handleInputChange(index, 'description', e.target.value);
                  }}
                  sx={{ width: '25ch' }}
                ></TextField>
              </ListItem>
            </List>
          </Box>
        ))}
        <Divider>
          <Button type="button" onClick={addExercise}>
            Add An Exercise
          </Button>
          <Button type="button" onClick={deleteLastExercise}>
            Delete Last Exercise
          </Button>
        </Divider>
        <Button type="submit" variant="contained">
          Create
        </Button>
        <Button
          type="button"
          variant="outlined"
          onClick={handleCancelButtonClick}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
}
export default CreateWorkout;
