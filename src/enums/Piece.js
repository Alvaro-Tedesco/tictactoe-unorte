class Piece {
  static BLUE = new Piece('BLUE');
  static RED = new Piece('RED');
  static NONE = new Piece('NONE');

  constructor(value) {
    this.value = value;
  }
}

export default Piece;
