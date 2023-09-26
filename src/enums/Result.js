class Result {
  static NONE = new Result("NONE");
  static BLACK_WIN = new Result("BLACK_WIN");
  static ORANGE_WIN = new Result("ORANGE_WIN");
  static DRAW = new Result("DRAW");
  static FINISHED = new Result("FINISHED");

  constructor(value) {
    this.value = value;
  }
}

export default Result;
