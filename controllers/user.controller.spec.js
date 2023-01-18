const { describe, it, expect, beforeEach } = require('@jest/globals');
const UserController = require('./user.controller');

describe('UserController', () => {
  let userController;

  beforeEach(() => {
    userController = new UserController();
  });

  it('should create a user with `_id` and `username`', () => {
    const user = userController.createUser('ikeborges');

    expect(user).toStrictEqual({
      _id: expect.any(String),
      username: 'ikeborges',
    });
  });

  it('should throw when creating a user without username', () => {
    expect(() => {
      userController.createUser();
    }).toThrow();
  });

  describe('Retrieve users', () => {
    it('should return user with `_id` and `username` props', () => {
      const user1 = userController.createUser('user1');
      const user2 = userController.createUser('user2');
      const expected = [user1, user2];

      const received = userController.getUsers();

      expect(received).toStrictEqual(expected);
    });
  });
});
