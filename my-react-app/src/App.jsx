// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPlayers from './Components/AllPlayers';
import SinglePlayer from './Components/SinglePlayer';
import NewPlayerForm from './Components/NewPlayerForm';
import { useState } from 'react';

function App() {
  const [players, setPlayers] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/add-player" element={<NewPlayerForm setPlayers={setPlayers} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
