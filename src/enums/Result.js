class Result {
  static NONE = new Result('NONE');
  static RED_WIN = new Result('RED_WIN');
  static BLUE_WIN = new Result('BLUE_WIN');
  static DRAW = new Result('DRAW');
  static FINISHED = new Result('FINISHED');

  constructor(value) {
    this.value = value;
  }
}

export default Result;