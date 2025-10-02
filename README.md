# StainesSuperKingswebsite
Going to create website for Staines Super Kings

## Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or connection URI)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ram29112018/StainesSuperKingswebsite.git
cd StainesSuperKingswebsite
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your MongoDB connection URI:
```
MONGODB_URI=mongodb://localhost:27017/stainessuperkings
PORT=3000
```

### Running the Server

```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 3000).

### Loading Sample Data (Optional)

To load sample player data into the database:

```bash
node examples/sample_data.js
```

### Running Tests

To run the test suite:

```bash
npm test
```

## API Endpoints

### GET /api/teams/:teamId/players

Fetch all players for a given team.

**Parameters:**
- `teamId` (string, required): The team identifier

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "teamId": "team123",
      "position": "Batsman",
      "jerseyNumber": 10,
      "battingStyle": "Right-handed",
      "bowlingStyle": "Right-arm fast",
      "nationality": "England",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  ]
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message"
}
```

### GET /health

Health check endpoint to verify the server is running.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Player Model

The Player model includes the following fields:

- `name` (String, required): Player's full name
- `teamId` (String, required): Team identifier
- `position` (String): Player's position (e.g., Batsman, Bowler, All-rounder)
- `jerseyNumber` (Number): Jersey number
- `battingStyle` (String): Batting style (Right-handed, Left-handed, Ambidextrous)
- `bowlingStyle` (String): Bowling style (e.g., Right-arm fast, Left-arm orthodox)
- `dateOfBirth` (Date): Date of birth
- `nationality` (String): Nationality
- `createdAt` (Date): Auto-generated timestamp
- `updatedAt` (Date): Auto-generated timestamp

## Examples

For more detailed API usage examples, see [examples/api_examples.md](examples/api_examples.md).
