const { describe, it, expect } = require('@jest/globals');
const { getUsers, createUser } = require('./controllers');

describe('Users', () => {
  it('should create a user', () => {
    const user = createUser('ikeborges');

    expect(user).toStrictEqual({
      _id: expect.any(String),
      username: 'ikeborges',
    });
  });

  it('should throw when creating a user without username', () => {
    expect(() => {
      createUser();
    }).toThrow();
  });
});
