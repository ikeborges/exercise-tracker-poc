const express = require('express');
const app = express();
const cors = require('cors');
const UserController = require('./controllers/user.controller');
require('dotenv').config();

app.use(cors());
// Parses URL-encoded requests as objects available in req.body
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const { createUser, getUsers } = new UserController();

app
  .route('/api/users')
  .post((req, res) => {
    const user = createUser(req.body.username);
    res.status(201).send(user);
  })
  .get((_, res) => {
    const users = getUsers();
    res.send(users);
  });

const listener = app.listen(process.env.PORT || 3000, () => {
  // TODO: Remove this
  createUser('ikeborges');
  createUser('carlosmat');

  console.log('Your app is listening on port ' + listener.address().port);
});
