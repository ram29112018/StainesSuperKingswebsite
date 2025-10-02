import React from 'react';
import PropTypes from 'prop-types';
import './PlayerStatsCard.css';

/**
 * PlayerStatsCard component displays a cricket player's statistics
 * @param {Object} props - Component props
 * @param {string} props.name - Player's name
 * @param {number} props.runs - Total runs scored by the player
 * @param {number} props.wickets - Total wickets taken by the player
 */
const PlayerStatsCard = ({ name, runs, wickets }) => {
  return (
    <div className="player-stats-card">
      <h3 className="player-name">{name}</h3>
      <div className="player-stats">
        <div className="stat-item">
          <span className="stat-label">Runs:</span>
          <span className="stat-value">{runs}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Wickets:</span>
          <span className="stat-value">{wickets}</span>
        </div>
      </div>
    </div>
  );
};

PlayerStatsCard.propTypes = {
  name: PropTypes.string.isRequired,
  runs: PropTypes.number.isRequired,
  wickets: PropTypes.number.isRequired,
};

export default PlayerStatsCard;
