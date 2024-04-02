import { Box, TextField, Button } from '@mui/material';

function UserLogin() {
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
      <form>
        <h2>Please login below</h2>
        <TextField label="username"></TextField>
        <TextField label="password"></TextField>
        <Button>login</Button>
      </form>
    </Box>
  );
}

export default UserLogin;
