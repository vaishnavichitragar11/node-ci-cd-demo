const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return Hello from CI/CD!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello from CI/CD!');
  });
});
