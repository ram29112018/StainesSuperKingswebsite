const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const Player = require('../models/Player');

describe('Teams API', () => {
  beforeAll(async () => {
    // Connect to test database
    const testDbUri = process.env.MONGODB_TEST_URI || 'mongodb://localhost:27017/stainessuperkings_test';
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(testDbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    }
  });

  afterAll(async () => {
    // Clean up and close connection
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    // Clear players collection before each test
    await Player.deleteMany({});
  });

  describe('GET /api/teams/:teamId/players', () => {
    it('should return empty array when no players exist for a team', async () => {
      const response = await request(app)
        .get('/api/teams/team123/players')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.count).toBe(0);
      expect(response.body.data).toEqual([]);
    });

    it('should return all players for a given team', async () => {
      // Create test players
      const testPlayers = [
        {
          name: 'John Doe',
          teamId: 'team123',
          position: 'Batsman',
          jerseyNumber: 10,
          battingStyle: 'Right-handed',
          nationality: 'England'
        },
        {
          name: 'Jane Smith',
          teamId: 'team123',
          position: 'Bowler',
          jerseyNumber: 5,
          bowlingStyle: 'Right-arm fast',
          nationality: 'Australia'
        },
        {
          name: 'Bob Wilson',
          teamId: 'team456',
          position: 'All-rounder',
          jerseyNumber: 7,
          nationality: 'India'
        }
      ];

      await Player.insertMany(testPlayers);

      const response = await request(app)
        .get('/api/teams/team123/players')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.count).toBe(2);
      expect(response.body.data).toHaveLength(2);
      expect(response.body.data[0].name).toBe('John Doe');
      expect(response.body.data[1].name).toBe('Jane Smith');
    });

    it('should return only players for the specified team', async () => {
      // Create players for multiple teams
      const testPlayers = [
        { name: 'Player 1', teamId: 'teamA', position: 'Batsman' },
        { name: 'Player 2', teamId: 'teamA', position: 'Bowler' },
        { name: 'Player 3', teamId: 'teamB', position: 'Batsman' }
      ];

      await Player.insertMany(testPlayers);

      const response = await request(app)
        .get('/api/teams/teamA/players')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.count).toBe(2);
      expect(response.body.data.every(player => player.teamId === 'teamA')).toBe(true);
    });
  });

  describe('GET /health', () => {
    it('should return OK status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body.status).toBe('OK');
      expect(response.body.message).toBe('Server is running');
    });
  });
});
