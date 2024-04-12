import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import CreateUser from './CreateUser';
import axios from 'axios';
const API_SERVER = import.meta.env.VITE_APP_API;

function UserLogin({ loginClick }) {
  const [createUserPage, setCreateUserPage] = useState(false);

  const handleLoginSubmit = async () => {
    // add logic for loging in (axios)
    // try {
    //   const response = await axios.get(`${API_SERVER}/signin`, {
    //     username: ,
    //     password: ,
    //   });
    // } catch (error) {
    //   console.error("Error logging into account", error);
    // }
    loginClick();
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
          <TextField label="username"></TextField>
          <TextField label="password"></TextField>
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
