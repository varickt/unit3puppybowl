import React, { useEffect, useState } from 'react';

const PlayerRoster = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch players data from the API
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-PT/players/'); // Update with your actual API endpoint
        const data = await response.json();

        if (data.success) {
          setPlayers(data.data.players); // Set players if successful
        } else {
          setError(data.error); // Set error if not successful
        }
      } catch (err) {
        setError(err.message); // Handle any other errors
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchPlayers();
  }, []); // Empty dependency array to run only on mount

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div>
      <h1>Player Roster</h1>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            <img src={player.imageUrl} alt={player.name} width="100" />
            <h2>{player.name}</h2>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerRoster;
