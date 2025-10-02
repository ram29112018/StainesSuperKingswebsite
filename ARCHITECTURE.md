# Architecture Documentation

## Overview

This is a Node.js/Express application with MongoDB for managing the Staines Super Kings cricket team website. The current implementation includes a RESTful API for fetching team players.

## Technology Stack

- **Runtime**: Node.js
- **Web Framework**: Express.js v5.1.0
- **Database**: MongoDB
- **ODM**: Mongoose v8.18.3
- **Environment Variables**: dotenv v17.2.3
- **Testing**: Jest v30.2.0 + Supertest v7.1.4

## Project Structure

```
StainesSuperKingswebsite/
├── models/              # Mongoose data models
│   └── Player.js       # Player model with team relationships
├── routes/             # Express route handlers
│   └── teams.js        # Team-related routes
├── tests/              # Test suite
│   └── teams.test.js   # Tests for team routes
├── examples/           # Usage examples and sample data
│   ├── api_examples.md # API usage documentation
│   └── sample_data.js  # Script to load sample data
├── server.js           # Express server configuration
├── package.json        # Project dependencies and scripts
├── .env.example        # Environment variable template
├── .gitignore         # Git ignore patterns
└── README.md          # Project documentation
```

## Data Models

### Player Model

The `Player` model represents a cricket player with the following schema:

```javascript
{
  name: String (required),          // Player's full name
  teamId: String (required, indexed), // Team identifier
  position: String,                   // Player position
  jerseyNumber: Number,              // Jersey number
  battingStyle: String,              // Batting style enum
  bowlingStyle: String,              // Bowling style enum
  dateOfBirth: Date,                 // Date of birth
  nationality: String,               // Nationality
  timestamps: true                   // Auto-managed createdAt/updatedAt
}
```

The `teamId` field is indexed for efficient querying.

## API Routes

### Teams Route (`/api/teams`)

Defined in `routes/teams.js`:

- **GET /api/teams/:teamId/players**
  - Fetches all players for a specific team
  - Returns JSON with success status, count, and player array
  - Handles errors gracefully with appropriate status codes

### Health Check (`/health`)

- Simple endpoint to verify server status
- Returns `{ status: 'OK', message: 'Server is running' }`

## Middleware

The application uses the following middleware:

1. `express.json()` - Parse JSON request bodies
2. `express.urlencoded({ extended: true })` - Parse URL-encoded bodies
3. Custom 404 handler - Returns JSON error for unknown routes
4. Custom error handler - Catches and formats server errors

## Database Connection

- MongoDB connection is established on server start
- Connection URI is configured via environment variables
- Mongoose options include `useNewUrlParser` and `useUnifiedTopology`
- Server exits gracefully on connection failure

## Environment Configuration

Environment variables are managed through `.env` file:

- `MONGODB_URI` - MongoDB connection string
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (test/development/production)

## Testing Strategy

The test suite uses:
- **Jest** as the test runner
- **Supertest** for HTTP assertions
- **In-memory/test database** for isolated tests

Tests cover:
- Successful player retrieval
- Empty results for non-existent teams
- Team isolation (only returns players for specified team)
- Health check endpoint
- Error handling

## Error Handling

The application implements a comprehensive error handling strategy:

1. **Route-level try-catch** - Catches async errors in route handlers
2. **Validation** - Validates required parameters (teamId)
3. **Appropriate HTTP status codes**:
   - 200: Success
   - 400: Bad request (missing/invalid parameters)
   - 404: Route not found
   - 500: Server error
4. **Consistent error response format**:
   ```json
   {
     "success": false,
     "message": "Error description",
     "error": "Detailed error message"
   }
   ```

## Future Enhancements

Potential areas for expansion:

1. **Additional Routes**:
   - POST /api/teams/:teamId/players - Add new players
   - PUT /api/teams/:teamId/players/:playerId - Update player
   - DELETE /api/teams/:teamId/players/:playerId - Remove player
   - GET /api/teams - List all teams

2. **Features**:
   - Player statistics
   - Match schedules
   - Team standings
   - Authentication and authorization
   - Player image uploads
   - Search and filtering

3. **Performance**:
   - Redis caching
   - Pagination for large datasets
   - Query optimization
   - Database indexing strategies

4. **Security**:
   - Rate limiting
   - Input sanitization
   - CORS configuration
   - API authentication (JWT)

5. **Monitoring**:
   - Logging (Winston/Morgan)
   - Performance monitoring
   - Error tracking (Sentry)
   - Health checks

## Development Workflow

1. **Install dependencies**: `npm install`
2. **Configure environment**: Copy `.env.example` to `.env`
3. **Start MongoDB**: Ensure MongoDB is running locally or update connection URI
4. **Load sample data**: `node examples/sample_data.js` (optional)
5. **Start server**: `npm start`
6. **Run tests**: `npm test`

## API Versioning

Currently the API is unversioned. As the API evolves, consider implementing versioning:
- URL versioning: `/api/v1/teams`
- Header versioning: `Accept: application/vnd.api.v1+json`

## Contributing

When adding new features:
1. Follow existing code structure and patterns
2. Add appropriate tests
3. Update documentation
4. Ensure all tests pass
5. Use consistent error handling patterns
