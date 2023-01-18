const { describe, it, expect, beforeEach } = require('@jest/globals');
const ExerciseController = require('./exercise.controller');
const UserController = require('./user.controller');

describe('UserController', () => {
  let userController;

  beforeEach(() => {
    userController = new UserController();
  });

  it('should create a user with `username`', () => {
    const user = userController.createUser('ikeborges');

    expect(user).toStrictEqual({
      _id: expect.any(String),
      username: 'ikeborges',
      count: 0,
      logs: [],
    });
  });

  it('should throw when creating a user without username', () => {
    expect(() => {
      userController.createUser();
    }).toThrow();
  });

  describe('Retrieve users', () => {
    it('should return all users', () => {
      const user1 = userController.createUser('user1');
      const user2 = userController.createUser('user2');
      const expected = [user1, user2];

      const received = userController.getUsers();

      expect(received).toStrictEqual(expected);
    });

    it('should retrieve an user by id', () => {
      userController.createUser('Dummy user');
      const expected = userController.createUser('Target user');

      const user = userController.getUserById(expected._id);

      expect(user).toStrictEqual(user);
    });

    it('should throw if retrieving an inexistent user by id', () => {
      expect(() => {
        userController.getUserById('Inexistent ID');
      }).toThrow('User not found');
    });
  });

  it("should add exercises to a user's log", () => {
    const user = userController.createUser('Some user');
    const userId = user._id;

    const exerciseController = new ExerciseController();
    const exercise = exerciseController.createExercise(
      'Some exercise',
      3,
      '2023-03-03'
    );

    const updatedUser = userController.addExercise(userId, exercise);

    expect(updatedUser).toStrictEqual({
      _id: userId,
      username: user.username,
      count: 1,
      logs: [
        {
          description: exercise.description,
          duration: exercise.duration,
          date: exercise.date,
        },
      ],
    });
  });
});
