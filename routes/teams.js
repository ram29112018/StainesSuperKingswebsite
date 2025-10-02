const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

// GET /api/teams/:teamId/players - Fetch all players for a given team
router.get('/:teamId/players', async (req, res) => {
  try {
    const { teamId } = req.params;
    
    // Validate teamId
    if (!teamId) {
      return res.status(400).json({ 
        success: false,
        message: 'Team ID is required' 
      });
    }

    // Fetch all players for the given team
    const players = await Player.find({ teamId });

    res.status(200).json({
      success: true,
      count: players.length,
      data: players
    });
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error fetching players',
      error: error.message 
    });
  }
});

module.exports = router;
