# API Usage Examples

This document provides examples of how to use the Staines Super Kings API.

## Prerequisites

1. Ensure MongoDB is running
2. Start the server: `npm start`
3. (Optional) Load sample data: `node examples/sample_data.js`

## Examples

### 1. Fetch All Players for a Team

Fetch all players for the Staines Super Kings team:

```bash
curl http://localhost:3000/api/teams/staines-super-kings/players
```

**Expected Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Virat Sharma",
      "teamId": "staines-super-kings",
      "position": "Batsman",
      "jerseyNumber": 18,
      "battingStyle": "Right-handed",
      "bowlingStyle": "",
      "nationality": "India",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    },
    ...
  ]
}
```

### 2. Fetch Players for a Team with No Players

```bash
curl http://localhost:3000/api/teams/non-existent-team/players
```

**Expected Response:**
```json
{
  "success": true,
  "count": 0,
  "data": []
}
```

### 3. Health Check

Check if the server is running:

```bash
curl http://localhost:3000/health
```

**Expected Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### 4. Using with JavaScript/Node.js

```javascript
const axios = require('axios');

async function getTeamPlayers(teamId) {
  try {
    const response = await axios.get(`http://localhost:3000/api/teams/${teamId}/players`);
    console.log(`Found ${response.data.count} players`);
    console.log(response.data.data);
  } catch (error) {
    console.error('Error fetching players:', error.message);
  }
}

getTeamPlayers('staines-super-kings');
```

### 5. Using with Postman

1. Open Postman
2. Create a new GET request
3. Enter URL: `http://localhost:3000/api/teams/staines-super-kings/players`
4. Click "Send"
5. View the response in the Body tab

### 6. Using with Python

```python
import requests

def get_team_players(team_id):
    url = f"http://localhost:3000/api/teams/{team_id}/players"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        print(f"Found {data['count']} players")
        for player in data['data']:
            print(f"- {player['name']} (#{player.get('jerseyNumber', 'N/A')})")
    else:
        print(f"Error: {response.status_code}")

get_team_players('staines-super-kings')
```

## Testing the API

Run the test suite to verify all functionality:

```bash
npm test
```

## Error Handling

The API returns appropriate HTTP status codes:

- `200 OK`: Successful request
- `400 Bad Request`: Invalid team ID
- `404 Not Found`: Route not found
- `500 Internal Server Error`: Server error

Example error response:
```json
{
  "success": false,
  "message": "Error message here",
  "error": "Detailed error information"
}
```
