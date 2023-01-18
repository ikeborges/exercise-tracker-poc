class ExerciseController {
  constructor() {}

  createExercise = (description, duration, date) => {
    const today = new Date().toDateString();

    return {
      description,
      duration,
      date: date ? new Date(date.replace('-', '/')).toDateString() : today,
    };
  };
}

module.exports = ExerciseController;
