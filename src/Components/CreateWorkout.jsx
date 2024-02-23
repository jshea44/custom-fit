import {
  List,
  ListItem,
  Divider,
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Select,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';

function CreateWorkout() {
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

  return (
    <div>
      <h2>Create Workout</h2>
      <form>
        <TextField
          fullWidth
          label="Workout Name"
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
                  sx={{ width: '25ch' }}
                ></TextField>
              </ListItem>
              <ListItem>
                <TextField label="Sets" sx={{ width: '25ch' }}></TextField>
              </ListItem>
              <ListItem>
                <TextField label="Reps" sx={{ width: '25ch' }}></TextField>
              </ListItem>
              <ListItem>
                <TextField label="Weight" sx={{ width: '25ch' }}></TextField>
              </ListItem>
              <ListItem>
                <TextField label="Time" sx={{ width: '25ch' }}></TextField>
              </ListItem>
              <ListItem>
                <TextField label="Distance" sx={{ width: '25ch' }}></TextField>
              </ListItem>
              <ListItem>
                <TextField
                  label="Add a description..."
                  multiline
                  rows={4}
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
        </Divider>
        <Button type="submit">Create</Button>
        <Button type="submit">Cancel</Button>
      </form>
    </div>
  );
}
export default CreateWorkout;
