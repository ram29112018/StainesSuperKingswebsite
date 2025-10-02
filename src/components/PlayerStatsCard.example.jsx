import React from 'react';
import PlayerStatsCard from './PlayerStatsCard';

/**
 * Example usage of the PlayerStatsCard component
 */
const PlayerStatsCardExample = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '20px' }}>
      <PlayerStatsCard 
        name="Virat Kohli" 
        runs={12345} 
        wickets={4} 
      />
      <PlayerStatsCard 
        name="Jasprit Bumrah" 
        runs={234} 
        wickets={150} 
      />
      <PlayerStatsCard 
        name="Rohit Sharma" 
        runs={10234} 
        wickets={8} 
      />
    </div>
  );
};

export default PlayerStatsCardExample;
