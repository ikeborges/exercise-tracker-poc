class ExerciseController {
  constructor() {}

  createExercise = (description, duration, date) => {
    return {
      description,
      duration,
      date: new Date(date),
    };
  };
}

module.exports = ExerciseController;
