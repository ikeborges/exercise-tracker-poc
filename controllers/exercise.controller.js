class ExerciseController {
  constructor() {}

  createExercise = (description, duration, date = new Date()) => {
    return {
      description,
      duration,
      date: new Date(date),
    };
  };
}

module.exports = ExerciseController;
