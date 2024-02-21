function Workout({ workout }) {
  // const sampleData = {

  // };

  return (
    <li>
      <p>{workout.name}</p>
      <ul>
        {workout.exercises.map((exercise, index) => (
          <li key={index}>
            <p>
              Exercise {index + 1}: {exercise.name}
            </p>
            {exercise.sets && <p>Sets: {exercise.sets}</p>}
            {exercise.reps && <p>Reps: {exercise.reps}</p>}
            {exercise.weight && <p>Weight: {exercise.weight}</p>}
            {exercise.time && <p>Time: {exercise.time}</p>}
            {exercise.distance && <p>distance: {exercise.distance}</p>}
            {exercise.isDropset && <p>isDropset: {exercise.isDropset}</p>}
            {exercise.isSuperset && <p>isSuperset: {exercise.isSuperset}</p>}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Workout;
