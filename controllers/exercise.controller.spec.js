const { describe, it, expect, beforeEach } = require('@jest/globals');
const ExerciseController = require('./exercise.controller');

describe('ExerciseController', () => {
  let exerciseController;

  beforeEach(() => {
    exerciseController = new ExerciseController();
  });

  it('should create an exercise with `description`, `duration` and `date` (parsed)', () => {
    const description = 'Sample description';
    const duration = 20;
    const date = '2023-04-03';

    const expected = {
      description,
      duration,
      date: new Date(date),
    };

    const received = exerciseController.createExercise(
      description,
      duration,
      date
    );

    expect(received).toStrictEqual(expected);
  });
});
