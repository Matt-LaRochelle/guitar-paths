import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Queries from './components/queries/Queries';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Practice from './components/practice/Practice';
import EarTraining from './components/earTraining/EarTraining';
import Skill from './components/skill/Skill';
import Theory from './components/theory/Theory';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Game from './components/game/Game';

import ExerciseList from './components/exercise-list/Exercise-list';
import EditExercise from './components/edit-exercise/Edit-exercise';
import CreateExercise from './components/create-exercise/Create-exercise';
// import Register from './components/login/register/Register';


function App(props) {
  return (
    <BrowserRouter>
    <main>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/queries" element={<Queries />}/>
        <Route path="/practice" element={<Practice />}/>
        <Route path="/eartraining" element={<EarTraining user={props.user} />}/>
        <Route path="/skill" element={<Skill />}/>
        <Route path="/theory" element={<Theory />}/>
        {/* <Route path="/" element={<Login />}/> */}
        <Route path="/" element={<Profile function2={props.function2} user={props.user} />}/>
        <Route path="/game" element={<Game />}/>

        {/* Added for tutorial: */}
        {/* <Route path="/" element={<ExerciseList />}/> */}
        <Route path="/edit:id" element={<EditExercise />}/>
        <Route path="/create" element={<CreateExercise />}/>
        {/* <Route path="/user" element={<CreateUser />}/> */}
      </Routes>
      
    </main>
    </BrowserRouter>
  );
}

export default App;
