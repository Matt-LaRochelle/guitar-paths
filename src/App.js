import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Queries from './components/queries/Queries';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {
  return (
    <BrowserRouter>
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/queries" element={<Queries />}/>
      </Routes>
      
    </main>
    </BrowserRouter>
  );
}

export default App;
