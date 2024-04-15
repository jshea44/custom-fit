import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
const API_SERVER = import.meta.env.VITE_APP_API;

function CreateUser({ cancelCreateClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateUserSubmit = async () => {
    try {
      // logic to create account (axios call)
      const response = await axios.post(`${API_SERVER}/signup`, {
        username: username,
        password: password,
      });
    } catch (error) {
      console.error('Error creating account', error);
    }
  };

  const handleInputChange = (field, value) => {
    if (field === 'username') {
      setUsername(value);
    } else if (field === 'password') {
      setPassword(value);
    }
  };

  return (
    <Box>
      <form onSubmit={handleCreateUserSubmit}>
        <h2>Create Account</h2>
        <TextField
          label="Enter a username"
          value={username}
          onChange={(e) => {
            handleInputChange('username', e.target.value);
          }}
        ></TextField>
        <TextField
          label="Enter a password"
          type="password"
          value={password}
          onChange={(e) => {
            handleInputChange('password', e.target.value);
          }}
        ></TextField>
        <Button type="submit">Create</Button>
        <Button onClick={cancelCreateClick}>Cancel</Button>
      </form>
    </Box>
  );
}

export default CreateUser;
