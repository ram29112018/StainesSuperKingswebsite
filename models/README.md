# Player Model Documentation

## Overview
The Player model is a Mongoose schema designed for managing cricket player data for the Staines Super Kings team.

## Schema Fields

### Required Fields
- **name** (String): Player's full name (2-100 characters)
- **role** (String): Player's role in the team
  - Valid values: 'Batsman', 'Bowler', 'All-rounder', 'Wicket-keeper', 'Captain'

### Optional Fields
- **runs** (Number): Total runs scored (default: 0, min: 0)
- **wickets** (Number): Total wickets taken (default: 0, min: 0)
- **matches** (Number): Total matches played (default: 0, min: 0)
- **battingAverage** (Number): Player's batting average (default: 0, min: 0)
- **bowlingAverage** (Number): Player's bowling average (default: 0, min: 0)
- **strikeRate** (Number): Batting strike rate (default: 0, min: 0)
- **economy** (Number): Bowling economy rate (default: 0, min: 0)
- **jerseyNumber** (Number): Player's jersey number (1-99)
- **isActive** (Boolean): Whether the player is currently active (default: true)

### Automatic Fields
- **createdAt** (Date): Timestamp when the player record was created
- **updatedAt** (Date): Timestamp when the player record was last updated

## Virtual Fields
- **displayName**: Returns player name with jersey number (e.g., "Virat Kohli (#18)")

## Instance Methods

### isAllRounder()
Returns `true` if the player's role is 'All-rounder', otherwise `false`.

```javascript
const player = await Player.findById(playerId);
console.log(player.isAllRounder()); // true or false
```

### getPerformanceScore()
Calculates a performance score based on runs (40% weight) and wickets (60% weight).

```javascript
const player = await Player.findById(playerId);
console.log(player.getPerformanceScore()); // e.g., 2002.4
```

## Static Methods

### findTopRunScorers(limit)
Finds the top run scorers among active players.

```javascript
const topScorers = await Player.findTopRunScorers(10);
```

### findTopWicketTakers(limit)
Finds the top wicket takers among active players.

```javascript
const topWicketTakers = await Player.findTopWicketTakers(10);
```

## Usage Examples

### Creating a New Player
```javascript
const Player = require('./models/Player');

const newPlayer = new Player({
  name: 'Virat Kohli',
  role: 'Batsman',
  runs: 5000,
  wickets: 4,
  matches: 150,
  battingAverage: 55.5,
  strikeRate: 140.2,
  jerseyNumber: 18
});

await newPlayer.save();
```

### Querying Players
```javascript
// Find all batsmen
const batsmen = await Player.find({ role: 'Batsman' });

// Find active players with more than 1000 runs
const topBatsmen = await Player.find({ 
  isActive: true, 
  runs: { $gte: 1000 } 
});

// Find player by name
const player = await Player.findOne({ name: 'Virat Kohli' });
```

### Updating a Player
```javascript
const player = await Player.findById(playerId);
player.runs += 50; // Add 50 runs
player.matches += 1; // Increment match count
await player.save();
```

### Deleting a Player
```javascript
// Soft delete (mark as inactive)
await Player.findByIdAndUpdate(playerId, { isActive: false });

// Hard delete
await Player.findByIdAndDelete(playerId);
```

## Validation
The model includes comprehensive validation:
- Name must be 2-100 characters
- Role must be one of the predefined values
- Numeric fields cannot be negative
- Jersey number must be between 1 and 99
