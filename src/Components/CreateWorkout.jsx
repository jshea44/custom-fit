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
        <List>
          <form>
            <FormControl variant="outlined" sx={{ width: 500 }}>
              <TextField
                fullWidth
                label="Workout Name"
                sx={{ width: '25ch' }}
              ></TextField>
              <ListItem>
                <TextField
                  label="Exercise Name"
                  sx={{ width: '25ch' }}
                ></TextField>
              </ListItem>
            </FormControl>
          </form>
          <Button type="submit">Create</Button>
        </List>
      </Box>
    </div>
  );
}
export default CreateWorkout;
