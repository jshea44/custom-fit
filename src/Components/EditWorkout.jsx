import { List, ListItem, Divider, Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
const API_SERVER = import.meta.env.VITE_APP_API;

function EditWorkout({ onButtonClick, workoutId, exercises, workoutName }) {
  const [editedWorkoutName, setEditedWorkoutName] = useState(workoutName);
  const [editedExercises, setEditedExercises] = useState(exercises);

  const handleUpdateWorkout = async (e) => {
    e.preventDefault();
    console.log('handleUpdate being called??');
    try {
      const response = await axios.put(`${API_SERVER}/workout/${workoutId}`, {
        name: editedWorkoutName,
        exercises: editedExercises,
      });
      onButtonClick();
      console.log(response);
    } catch (error) {
      console.error('Error updating workout', error);
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedExercises = [...editedExercises];
    updatedExercises[index][field] = value;
    setEditedExercises(updatedExercises);
  };

  const addExercise = () => {
    setEditedExercises([
      ...editedExercises,
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
    if (editedExercises.length > 1) {
      const updatedExercises = editedExercises.slice(0, -1);
      setEditedExercises(updatedExercises);
    }
  };

  return (
    <div>
      <h2>Edit Workout</h2>
      <form onSubmit={handleUpdateWorkout}>
        <TextField
          fullWidth
          label="Workout Name"
          value={editedWorkoutName}
          onChange={(e) => setEditedWorkoutName(e.target.value)}
          sx={{ paddingBottom: 5 }}
        ></TextField>
        {editedExercises.map((exercise, index) => (
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
        <Button type="button" onClick={onButtonClick}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}

export default EditWorkout;
