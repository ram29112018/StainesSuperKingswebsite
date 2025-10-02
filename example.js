const mongoose = require('mongoose');
const Player = require('./models/Player');

// Example usage of the Player model
// Note: Update the connection string with your MongoDB URI
async function exampleUsage() {
  try {
    // Connect to MongoDB
    // await mongoose.connect('mongodb://localhost:27017/stainessuperkings', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true
    // });

    // Create a new player
    const newPlayer = new Player({
      name: 'Virat Kohli',
      role: 'Batsman',
      runs: 5000,
      wickets: 4,
      matches: 150,
      battingAverage: 55.5,
      strikeRate: 140.2,
      jerseyNumber: 18,
      isActive: true
    });

    // Save the player
    // await newPlayer.save();
    console.log('Player model structure:', newPlayer);

    // Find top run scorers
    // const topScorers = await Player.findTopRunScorers(5);
    // console.log('Top Run Scorers:', topScorers);

    // Find top wicket takers
    // const topWicketTakers = await Player.findTopWicketTakers(5);
    // console.log('Top Wicket Takers:', topWicketTakers);

    // Check if player is all-rounder
    console.log('Is All-rounder:', newPlayer.isAllRounder());

    // Get performance score
    console.log('Performance Score:', newPlayer.getPerformanceScore());

    // Get display name
    console.log('Display Name:', newPlayer.displayName);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // await mongoose.connection.close();
  }
}

// Run the example
exampleUsage();
