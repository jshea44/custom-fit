# Custom Fit

> Custom Fit is a front end application to showcase the custom-fit-server. It utilizes React and Material UI for components, and axios to connect to the server. It is a basic front end to showcase functionality (i.e it's not pretty). When used in combination with the custom-fit-server, a user is able to create/login to an account, create/update/delete workouts, which in turn can hold a multitude of exercises.

UPDATE Apr 24, 2024: The ability to create a user and log in does indeed work, however, the workouts are not associated with any particular user. This means that all workouts/exercises will be visible on the home page regardless of who is logged in. All other functionality should be working as intended. This will probably not be updated as it's time to move on to a new project.

- ChatGPT

## Setup

Make sure you go through the installation process for the custom-fit-server.

Install dependencies with:

`npm install`

Create a .env file:

- `VITE_APP_API` -> Set this to your backend URI, default should be localhost:3001

Run page:

`npm run dev`

## Contributors

- Joshua Shea

## Resources

- ChatGPT
