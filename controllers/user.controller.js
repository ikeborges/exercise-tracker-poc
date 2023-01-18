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
    };

    this.users.push(user);

    return user;
  };
}

module.exports = UserController;
