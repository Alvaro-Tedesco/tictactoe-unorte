class Result {
  static NONE = new Result("NONE");
  static BLACK_WIN = new Result("BLACK_WIN");
  static ORANGE_WIN = new Result("ORANGE_WIN");
  static DRAW = new Result("DRAW");
  static FINISHED = new Result("FINISHED");

  constructor(value) {
    this.value = value;
  }

  static fromString(value) {
    const options = {
      [Result.NONE.value]: Result.NONE,
      [Result.BLACK_WIN.value]: Result.BLACK_WIN,
      [Result.ORANGE_WIN.value]: Result.ORANGE_WIN,
      [Result.DRAW.value]: Result.DRAW,
      [Result.FINISHED.value]: Result.FINISHED,
    };

    return options[value];
  }

  static codeToDescription(code) {
    const options = {
      [Result.DRAW.value]: "Empate",
      [Result.BLACK_WIN.value]: "Jogador 2",
      [Result.ORANGE_WIN.value]: "Jogador 1",
      [Result.FINISHED.value]: "Sessão finalizada",
      [Result.NONE.value]: "Sessão em andamento",
    };

    return options[code];
  }
}

export default Result;
