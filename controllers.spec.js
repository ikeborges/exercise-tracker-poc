const { describe, it, expect } = require('@jest/globals');
const { getUsers, createUser } = require('./controllers');

describe('Users', () => {
  it('should create a user', () => {
    const kaique = createUser('ikeborges');
    expect(kaique).toStrictEqual({
      _id: expect.any(String),
      username: 'ikeborges',
    });
  });
});
