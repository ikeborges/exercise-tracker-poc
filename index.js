const express = require('express');
const app = express();
const cors = require('cors');
const UserController = require('./controllers/user.controller');
const ExerciseController = require('./controllers/exercise.controller');
require('dotenv').config();

app.use(cors());
// Parses URL-encoded requests as objects available in req.body
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.get('/', (_, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const { addExercise, createUser, getUsers, getUserById } = new UserController();
const { createExercise } = new ExerciseController();

app
  .route('/api/users')
  .post((req, res) => {
    const user = createUser(req.body.username);
    res.status(201).send(user);
  })
  .get((_, res) => {
    const users = getUsers().map((user) => ({
      _id: user._id,
      username: user.username,
    }));
    res.send(users);
  });

app.post('/api/users/:id/exercises', (req, res) => {
  const { id: userId } = req.params;
  const { description, duration, date } = req.body;

  const exercise = createExercise(description, parseInt(duration), date);
  const user = getUserById(userId);

  addExercise(user._id, exercise);

  res.status(201).send({
    ...exercise,
    username: user.username,
    _id: user._id,
  });
});

app.get('/api/users/:id/logs', (req, res) => {
  const { id: userId } = req.params;
  const { from, to, limit } = req.query;

  const user = getUserById(userId);
  let log = user.log;

  if (from) {
    log = log.filter((l) => new Date(l.date) >= new Date(from));
  }

  if (to) {
    log = log.filter((l) => new Date(l.date) <= new Date(to));
  }

  if (limit) {
    log = log.slice(0, parseInt(limit));
  }

  res.send({ ...user, log });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
