const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Player name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  role: {
    type: String,
    required: [true, 'Player role is required'],
    enum: {
      values: ['Batsman', 'Bowler', 'All-rounder', 'Wicket-keeper', 'Captain'],
      message: '{VALUE} is not a valid role'
    }
  },
  runs: {
    type: Number,
    default: 0,
    min: [0, 'Runs cannot be negative']
  },
  wickets: {
    type: Number,
    default: 0,
    min: [0, 'Wickets cannot be negative']
  },
  matches: {
    type: Number,
    default: 0,
    min: [0, 'Matches cannot be negative']
  },
  battingAverage: {
    type: Number,
    default: 0,
    min: [0, 'Batting average cannot be negative']
  },
  bowlingAverage: {
    type: Number,
    default: 0,
    min: [0, 'Bowling average cannot be negative']
  },
  strikeRate: {
    type: Number,
    default: 0,
    min: [0, 'Strike rate cannot be negative']
  },
  economy: {
    type: Number,
    default: 0,
    min: [0, 'Economy rate cannot be negative']
  },
  jerseyNumber: {
    type: Number,
    min: [1, 'Jersey number must be at least 1'],
    max: [99, 'Jersey number cannot exceed 99']
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Virtual field for display name with jersey number
playerSchema.virtual('displayName').get(function() {
  return this.jerseyNumber ? `${this.name} (#${this.jerseyNumber})` : this.name;
});

// Instance method to check if player is an all-rounder
playerSchema.methods.isAllRounder = function() {
  return this.role === 'All-rounder';
};

// Instance method to calculate player performance score
playerSchema.methods.getPerformanceScore = function() {
  const runsScore = this.runs * 0.4;
  const wicketsScore = this.wickets * 0.6;
  return runsScore + wicketsScore;
};

// Static method to find top run scorers
playerSchema.statics.findTopRunScorers = function(limit = 10) {
  return this.find({ isActive: true })
    .sort({ runs: -1 })
    .limit(limit);
};

// Static method to find top wicket takers
playerSchema.statics.findTopWicketTakers = function(limit = 10) {
  return this.find({ isActive: true })
    .sort({ wickets: -1 })
    .limit(limit);
};

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
