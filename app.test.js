const request = require('supertest');
const app = require('./index');

describe('GET /matches', () => {
  it('should return a list of matches', async () => {
    const res = await request(app).get('/matches');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
