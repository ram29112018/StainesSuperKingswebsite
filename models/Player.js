const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  teamId: {
    type: String,
    required: true,
    index: true
  },
  position: {
    type: String,
    trim: true
  },
  jerseyNumber: {
    type: Number
  },
  battingStyle: {
    type: String,
    enum: ['Right-handed', 'Left-handed', 'Ambidextrous', '']
  },
  bowlingStyle: {
    type: String,
    enum: ['Right-arm fast', 'Left-arm fast', 'Right-arm medium', 'Left-arm medium', 'Right-arm off-break', 'Left-arm orthodox', 'Right-arm leg-break', 'Left-arm chinaman', '']
  },
  dateOfBirth: {
    type: Date
  },
  nationality: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
