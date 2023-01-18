const { v4: generateUUID } = require('uuid');

class UserController {
  constructor(users = []) {
    this.users = users;
  }

  getUsers = () => {
    return this.users;
  };

  getUserById = (id) => {
    const userIndex = this.users.findIndex((u) => u._id === id);
    if (userIndex < 0) throw new Error('User not found');

    return this.users[userIndex];
  };

  createUser = (username) => {
    if (!username) throw new TypeError();

    const user = {
      _id: generateUUID(),
      username,
      count: 0,
      logs: [],
    };

    this.users.push(user);

    return user;
  };

  addExercise = (userId, exercise) => {
    const userIndex = this.users.findIndex((u) => u._id === userId);
    this.users[userIndex].logs.push(exercise);
    this.users[userIndex].count += 1;

    return this.users[userIndex];
  };
}

module.exports = UserController;
