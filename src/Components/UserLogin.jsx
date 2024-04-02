import { Box, TextField, Button } from '@mui/material';

function UserLogin({ loginClick }) {
  const handleLoginSubmit = () => {
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
      <form onSubmit={handleLoginSubmit}>
        <h2>Please login below</h2>
        <TextField label="username"></TextField>
        <TextField label="password"></TextField>
        <Button type="submit">login</Button>
      </form>
    </Box>
  );
}

export default UserLogin;
