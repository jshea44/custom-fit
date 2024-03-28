import { useEffect, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import axios from 'axios';
const API_SERVER = import.meta.env.VITE_APP_API;
import EditWorkout from './EditWorkout';

function Workout({ workoutId, onDeleteButtonClick }) {
  const [exercises, setExercises] = useState([]);
  const [modal, setModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(`${API_SERVER}/workout/${workoutId}`);
        setExercises(response.data.exercises);
      } catch (error) {
        console.error('Error fetching exercises', error);
      }
    };
    fetchExercises();
  }, [workoutId]);

  const handleDeleteWorkoutClick = async () => {
    try {
      await axios.delete(`${API_SERVER}/workout/${workoutId}`);
      setModal(false);
      onDeleteButtonClick();
    } catch (error) {
      console.error('Error deleting workout', error);
    }
  };

  const handleEditButtonClick = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <EditWorkout
          workoutId={workoutId}
          exercises={exercises}
          onCancelButtonClick={handleCancelEdit}
        />
      ) : (
        <>
          <Button
            onClick={handleEditButtonClick}
            type="button"
            variant="contained"
          >
            EDIT
          </Button>
          <Button
            onClick={() => setModal(true)}
            type="button"
            variant="contained"
            color="error"
          >
            DELETE
          </Button>

          <Modal open={modal}>
            <Box
              sx={{
                position: 'absolute',
                top: '40%',
                left: '40%',
                transform: 'translate(-20%, -60%)',
                width: 400,
                color: 'black',
                bgcolor: 'darkgray',
                border: 'solid green 2px',
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography>
                Are you sure you want to delete this workout?
              </Typography>
              <Button
                variant="contained"
                color="error"
                onClick={handleDeleteWorkoutClick}
              >
                DELETE
              </Button>
              <Button variant="outlined" onClick={() => setModal(false)}>
                CANCEL
              </Button>
            </Box>
          </Modal>

          {exercises.map((exercise, _id) => (
            <Box key={_id} sx={{ border: 'solid red 2px', margin: '5px' }}>
              <p>{exercise.name}</p>
              <p>{exercise.sets}</p>
              <p>{exercise.reps}</p>
              <p>{exercise.weight}</p>
              <p>{exercise.time}</p>
              <p>{exercise.distance}</p>
              <p>{exercise.description}</p>
            </Box>
          ))}
        </>
      )}
    </div>
  );
}

export default Workout;
