// src/components/AllPlayers.jsx

import React, { useEffect, useState } from 'react';
import { fetchPlayers } from '../API'; // Adjust the path if necessary
import { Link } from 'react-router-dom';

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const fetchedPlayers = await fetchPlayers();
        console.log('Fetched Players:', fetchedPlayers); // Log fetched players for debugging
        if (Array.isArray(fetchedPlayers)) {
          setPlayers(fetchedPlayers);
        } else {
          console.error('Fetched data is not an array:', fetchedPlayers);
        }
      } catch (error) {
        console.error('Failed to fetch players:', error);
      }
    };
    getPlayers();
  }, []);

  return (
    <div>
      <h1>Player List</h1>
      {players.length === 0 ? (
        <p>No players available. Please check your API connection.</p>
      ) : (
        players.map((player) => (
          <div key={player.id}>
            <h4>{player.name}</h4>
            <Link to={`/players/${player.id}`}>See Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default AllPlayers;
