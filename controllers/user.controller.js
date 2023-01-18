const { v4: generateUUID } = require('uuid');

class UserController {
  constructor(users = []) {
    this.users = users;
  }

  getUsers = () => {
    return this.users;
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
