// src/components/SinglePlayer.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayers } from '../API'; // Adjust the path if necessary

const SinglePlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const getPlayer = async () => {
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-PT/players');
        const players = await response.json();
        const foundPlayer = players.find((p) => p.id === parseInt(id)); // Match by ID
        setPlayer(foundPlayer);
      } catch (error) {
        console.error('Failed to fetch player:', error);
      }
    };
    getPlayer();
  }, [id]);

  return (
    <div>
      {player ? (
        <div>
          <h1>{player.name}</h1>
          <p>Owner: {player.owner}</p>
          <p>Team: {player.team}</p>
        </div>
      ) : (
        <p>Loading player details...</p>
      )}
    </div>
  );
};

export default SinglePlayer;
