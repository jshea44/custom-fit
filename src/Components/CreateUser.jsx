import { Box, TextField, Button } from '@mui/material';

function CreateUser({ cancelCreateClick }) {
  return (
    <Box>
      <form>
        <h2>Create Account</h2>
        <TextField label="Enter a username"></TextField>
        <TextField label="Enter a password"></TextField>
        <Button>Create</Button>
        <Button onClick={cancelCreateClick}>Cancel</Button>
      </form>
    </Box>
  );
}

export default CreateUser;
