import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ExercisePage from "./Pages/Exercise/ExercisePage";
import WorkoutPage from "./Pages/Workout/WorkoutPage";
import EditWorkoutPage from "./Pages/EditExercisePage";



function App() {
  return (
    <Router>
      <Routes>
        <Route  exact path="/" element={<HomePage/>}/>
        <Route  path="/login" element={<LoginPage/>}/>
        <Route  path="/register" element={<RegisterPage/>}/>
        <Route  path="/workout" element={<WorkoutPage/>}/>
        <Route  path="/exercise" element={<ExercisePage/>}/>
        <Route  path="/workout/editexercise" element={<EditWorkoutPage/>}/>
      </Routes>
  </Router>
  );
}
export default App;

