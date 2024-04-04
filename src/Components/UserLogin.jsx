import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import CreateUser from './CreateUser';

function UserLogin({ loginClick }) {
  const [createUserPage, setCreateUserPage] = useState(false);
  const handleLoginSubmit = () => {
    // add logic for loging in (axios)
    loginClick();
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
        <CreateUser
        // cancelCreateClick={handleCancelCreate}
        // createClick={handleCreateUser}
        />
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
