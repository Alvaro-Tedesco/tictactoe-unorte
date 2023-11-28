class Result {
  static NONE = new Result("NONE");
  static BLACK_WIN = new Result("BLACK_WIN");
  static ORANGE_WIN = new Result("ORANGE_WIN");
  static DRAW = new Result("DRAW");
  static ERROR = new Result("ERROR");
  static MOVE = new Result("MOVE");

  constructor(value) {
    this.value = value;
  }

  static fromString(value) {
    const options = {
      [Result.NONE.value]: Result.NONE,
      [Result.BLACK_WIN.value]: Result.BLACK_WIN,
      [Result.ORANGE_WIN.value]: Result.ORANGE_WIN,
      [Result.DRAW.value]: Result.DRAW,
      [Result.ERROR.value]: Result.ERROR,
      [Result.MOVE.value]: Result.MOVE,
    };

    return options[value];
  }

  static codeToDescription(code) {
    const options = {
      [Result.DRAW.value]: "Empate",
      [Result.BLACK_WIN.value]: "Jogador 2",
      [Result.ORANGE_WIN.value]: "Jogador 1",
      [Result.ERROR.value]: "Sessão com Erro",
      [Result.NONE.value]: "Sessão em andamento",
      [Result.MOVE.value]: "Robo em movimento",
    };

    return options[code];
  }

  valueOf() {
    return this.value;
  }
}

export default Result;
