class Piece {
  static ORANGE = new Piece('ORANGE');
  static BLACK = new Piece('BLACK');
  static NONE = new Piece('NONE');

  constructor(value) {
    this.value = value;
  }
}

export default Piece;
