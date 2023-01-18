const { describe, it, expect } = require('@jest/globals');
const { getUsers, createUser } = require('./controllers');

describe('Users', () => {
  it('should create a user with `_id` and `username`', () => {
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

  describe('Retrieve users', () => {
    it('should return user with `_id` and `username` props', () => {
      const user1 = createUser('user1');
      const user2 = createUser('user2');

      const received = getUsers();

      expect(received).toContainEqual(user1, user2);
    });
  });
});
