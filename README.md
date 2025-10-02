# StainesSuperKingswebsite
Website for Staines Super Kings cricket team

## Project Structure

```
.
├── models/
│   ├── Player.js        # Mongoose model for cricket players
│   ├── index.js         # Model exports
│   └── README.md        # Detailed model documentation
├── example.js           # Example usage of the Player model
├── package.json         # Project dependencies
└── README.md           # This file
```

## Installation

```bash
npm install
```

## Player Model

The Player model is a Mongoose schema for managing cricket player data. It includes:

### Key Features
- **Required Fields**: name, role
- **Statistics**: runs, wickets, matches, batting/bowling averages, strike rate, economy
- **Metadata**: jersey number, active status, timestamps
- **Methods**: Performance calculations, role checks, leaderboard queries
- **Validation**: Comprehensive input validation

### Quick Start

```javascript
const Player = require('./models/Player');

// Create a new player
const player = new Player({
  name: 'Virat Kohli',
  role: 'Batsman',
  runs: 5000,
  wickets: 4,
  matches: 150,
  battingAverage: 55.5,
  strikeRate: 140.2,
  jerseyNumber: 18
});

await player.save();
```

For detailed documentation, see [models/README.md](models/README.md).

## Running the Example

```bash
node example.js
```

This will demonstrate:
- Creating a player instance
- Using instance methods (isAllRounder, getPerformanceScore)
- Accessing virtual fields (displayName)

## Database Connection

To connect to MongoDB, add the following to your application:

```javascript
const mongoose = require('mongoose');

await mongoose.connect('mongodb://localhost:27017/stainessuperkings', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

## License

ISC
