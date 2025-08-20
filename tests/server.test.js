const request = require('supertest');
const { app, server } = require('../src/server');

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  // Close the server after tests
  afterAll((done) => {
    server.close(done);
  });
});
