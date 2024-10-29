// src/API/index.js

// Fetch all players from the API
export const fetchPlayers = async () => {
    try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-PT/players');
      if (!response.ok) {
        throw new Error('Failed to fetch players');
      }
      const data = await response.json();
      console.log('Fetched Players:', data); // Log the fetched players for debugging
      return data; // Ensure this returns the correct structure (Array of players)
    } catch (error) {
      console.error('Error fetching players:', error);
      return []; // Return an empty array on error to prevent breaking the app
    }
  };
  
  // Add a new player to the API
  export const addPlayer = async (player) => {
    try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-PT/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(player),
      });
      if (!response.ok) {
        throw new Error('Failed to add player');
      }
      const data = await response.json();
      console.log('Added Player:', data); // Log the added player for debugging
      return data; // Return the new player
    } catch (error) {
      console.error('Error adding player:', error);
    }
  };
  
  // Export any additional API functions here if necessary
  