function CreateWorkout({ onAddWorkout }) {
  const [name, setName] = useState('');
  const [exercises, setExercises] = useState([]);

  const handleAddExercise = () => {
    // logic to add exercise
    const newExercise = {};
    setExercises([...exercises, newExercise]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWorkout = {
      name: name,
      exercises: exercises,
    };
    onAddWorkout(newWorkout);
    setName('');
    setExercises([]);
  };

  return (
    <div>
      <h2>Create Workout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Workout Name"
        />
        <button type="button" onClick={handleAddExercise}>
          Add Exercise
        </button>
        <button type="submit">Create Workout</button>
      </form>
    </div>
  );
}
export default CreateWorkout;
