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
      <Box sx={{ width: 50 }}>
        <FormControl variant="outlined" sx={{ width: '100ch' }}>
          <form>
            <TextField
              fullWidth
              label="Workout Name"
              sx={{ width: '25ch' }}
            ></TextField>
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
              <Divider>
                <Button type="submit">Add Another Exercise</Button>
              </Divider>
            </List>
            <Button type="submit">Create</Button>
          </form>
        </FormControl>
      </Box>
    </div>
  );
}
export default CreateWorkout;
