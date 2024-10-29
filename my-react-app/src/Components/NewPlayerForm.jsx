// src/components/NewPlayerForm.jsx

import React, { useState } from 'react';
import { addPlayer } from '../API'; // You need to implement this function in index.js

const NewPlayerForm = ({ onPlayerAdded }) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [team, setTeam] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPlayer = { name, owner, team };
      await addPlayer(newPlayer); // Call the function to add player
      onPlayerAdded(); // Call the function passed as a prop to refresh player list
      setName('');
      setOwner('');
      setTeam('');
    } catch (error) {
      console.error('Error adding player:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Player Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Team"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
        required
      />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default NewPlayerForm;
