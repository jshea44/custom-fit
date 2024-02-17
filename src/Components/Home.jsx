import Workout from './Workout';

function Home({ workouts }) {
  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map((workout, index) => (
          <Workout key={index} workout={workout} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
