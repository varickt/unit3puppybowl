// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AllPlayers from './Components/AllPlayers';
import SinglePlayer from './Components/SinglePlayer';
import NewPlayerForm from './Components/NewPlayerForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<AllPlayers />} />
      <Route path="/players/:id" element={<SinglePlayer />} />
      {/* Add a route for the NewPlayerForm if needed */}
    </Routes>
  </Router>
);
