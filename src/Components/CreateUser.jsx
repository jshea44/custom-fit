import { Box, TextField, Button } from '@mui/material';
import axios from 'axios';
const API_SERVER = import.meta.env.VITE_APP_API;

function CreateUser({ cancelCreateClick }) {
  const handleCreateButtonClick = async () => {
    try {
      // logic to create account (axios call)
    } catch (error) {
      console.error('Error creating account', error);
    }
  };

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
