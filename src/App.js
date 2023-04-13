import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Queries from './components/queries/Queries';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Practice from './components/practice/Practice';
import Musicianship from './components/musicianship/Musicianship';
import Skill from './components/skill/Skill';
import Theory from './components/theory/Theory';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Game from './components/game/Game';


function App() {
  return (
    <BrowserRouter>
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/queries" element={<Queries />}/>
        <Route path="/practice" element={<Practice />}/>
        <Route path="/musicianship" element={<Musicianship />}/>
        <Route path="/skill" element={<Skill />}/>
        <Route path="/theory" element={<Theory />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/game" element={<Game />}/>

      </Routes>
      
    </main>
    </BrowserRouter>
  );
}

export default App;
