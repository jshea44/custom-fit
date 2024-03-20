import { List, ListItem, Divider, Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
const API_SERVER = import.meta.env.VITE_APP_API;

function EditWorkout() {
  const handleWorkoutUpdate = async (e) => {
    e.preventDefault;
    try {
      const response = await axios.put(`${API_SERVER}/workout`);
    } catch (error) {
      console.error('Error updating workout', error);
    }
  };

  return (
    <div>
      <h2>Edit Workout</h2>
      <form>
        <TextField></TextField>
        {}
      </form>
    </div>
  );
}

export default EditWorkout;
