const { v4: generateUUID } = require('uuid');

const users = [];

const createUser = (username) => {
  if (!username) throw new TypeError();

  const user = {
    _id: generateUUID(),
    username,
  };

  users.push(user);

  return user;
};

module.exports = {
  users,
  createUser,
};
