import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import CreateUser from './CreateUser';
import axios from 'axios';
const API_SERVER = import.meta.env.VITE_APP_API;

function UserLogin({ loginClick }) {
  const [createUserPage, setCreateUserPage] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_SERVER}/signin`,
        {},
        {
          headers: {
            Authorization: `Basic ${btoa(`${username}:${password}`)}`,
          },
        }
      );
    } catch (error) {
      console.error('Error logging into account', error);
    }
    loginClick();
  };

  const handleInputChange = (field, value) => {
    if (field === 'username') {
      setUsername(value);
    } else if (field === 'password') {
      setPassword(value);
    }
  };

  const handleCancelCreate = () => {
    setCreateUserPage(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid green',
        height: '400px',
        width: '400px',
      }}
    >
      {createUserPage ? (
        <CreateUser cancelCreateClick={handleCancelCreate} />
      ) : (
        <form onSubmit={handleLoginSubmit}>
          <h2>Please login or create an account</h2>
          <TextField
            label="username"
            value={username}
            onChange={(e) => {
              handleInputChange('username', e.target.value);
            }}
          ></TextField>
          <TextField
            label="password"
            type="password"
            value={password}
            onChange={(e) => {
              handleInputChange('password', e.target.value);
            }}
          ></TextField>
          <Button type="submit">login</Button>
          <Button type="button" onClick={() => setCreateUserPage(true)}>
            Create An Account
          </Button>
        </form>
      )}
    </Box>
  );
}

export default UserLogin;
