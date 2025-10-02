require('dotenv').config();
const mongoose = require('mongoose');
const Player = require('../models/Player');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/stainessuperkings';

// Sample player data for Staines Super Kings
const samplePlayers = [
  {
    name: 'Virat Sharma',
    teamId: 'staines-super-kings',
    position: 'Batsman',
    jerseyNumber: 18,
    battingStyle: 'Right-handed',
    bowlingStyle: '',
    nationality: 'India'
  },
  {
    name: 'James Anderson',
    teamId: 'staines-super-kings',
    position: 'Bowler',
    jerseyNumber: 9,
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm fast',
    nationality: 'England'
  },
  {
    name: 'Ben Stokes',
    teamId: 'staines-super-kings',
    position: 'All-rounder',
    jerseyNumber: 55,
    battingStyle: 'Left-handed',
    bowlingStyle: 'Right-arm medium',
    nationality: 'England'
  },
  {
    name: 'Rashid Khan',
    teamId: 'staines-super-kings',
    position: 'Bowler',
    jerseyNumber: 19,
    battingStyle: 'Right-handed',
    bowlingStyle: 'Right-arm leg-break',
    nationality: 'Afghanistan'
  },
  {
    name: 'Jos Buttler',
    teamId: 'staines-super-kings',
    position: 'Wicket-keeper',
    jerseyNumber: 1,
    battingStyle: 'Right-handed',
    bowlingStyle: '',
    nationality: 'England'
  }
];

async function insertSampleData() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Clear existing players for this team
    await Player.deleteMany({ teamId: 'staines-super-kings' });
    console.log('Cleared existing data');

    // Insert sample players
    const result = await Player.insertMany(samplePlayers);
    console.log(`Successfully inserted ${result.length} players`);
    console.log('Sample players:', result.map(p => ({ name: p.name, teamId: p.teamId })));

    // Close connection
    await mongoose.connection.close();
    console.log('Connection closed');
  } catch (error) {
    console.error('Error inserting sample data:', error);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  insertSampleData();
}

module.exports = { samplePlayers, insertSampleData };
