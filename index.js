const express = require('express');
const app = express();
const cors = require('cors');
const { createUser, getUsers, seedUsers } = require('./controllers');
require('dotenv').config();

app.use(cors());
// Parses URL-encoded POST requests as objects and put them in req.body
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

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
  seedUsers();
  console.log('Your app is listening on port ' + listener.address().port);
});
