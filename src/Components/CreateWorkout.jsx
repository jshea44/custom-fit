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

function CreateWorkout() {
  // const [name, setName] = useState('');
  // const [exercises, setExercises] = useState([]);

  // const handleAddExercise = () => {
  //   // logic to add exercise
  //   const newExercise = {};
  //   setExercises([...exercises, newExercise]);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newWorkout = {
  //     name: name,
  //     exercises: exercises,
  //   };
  //   onAddWorkout(newWorkout);
  //   setName('');
  //   setExercises([]);
  // };

  return (
    <div>
      <h2>Create Workout</h2>
      <form>
        <TextField
          fullWidth
          label="Workout Name"
          InputLabelProps={{
            sx: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}
        ></TextField>
        <Box
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
        <Divider>
          <Button type="submit">Add Another Exercise</Button>
        </Divider>
        <Button type="submit">Create</Button>
        <Button type="submit">Cancel</Button>
      </form>
    </div>
  );
}
export default CreateWorkout;
