const { v4: generateUUID } = require('uuid');

const users = [];

const seedUsers = () => {
  createUser('ikeborges');
  createUser('carlosmat');
};

const createUser = (username) => {
  if (!username) throw new TypeError();

  const user = {
    _id: generateUUID(),
    username,
  };

  users.push(user);

  return user;
};

const getUsers = () => {
  return users;
};

module.exports = {
  createUser,
  getUsers,
  seedUsers,
};
