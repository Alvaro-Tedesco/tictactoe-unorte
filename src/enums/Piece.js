class Piece {
  static ORANGE = new Piece("ORANGE");
  static BLACK = new Piece("BLACK");
  static NONE = new Piece("NONE");

  constructor(value) {
    this.value = value;
  }

  static fromString(value) {
    const options = {
      [Piece.ORANGE.value]: Piece.ORANGE,
      [Piece.BLACK.value]: Piece.BLACK,
      [Piece.NONE.value]: Piece.NONE,
    };

    return options[value];
  }

  valueOf() {
    return this.value;
  }
}

export default Piece;
