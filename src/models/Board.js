import Piece from "../enums/Piece";

class Board {
  _positions;
  _id;

  constructor(
    id = null,
    positions = {
      A1: Piece.NONE,
      A2: Piece.NONE,
      A3: Piece.NONE,
      B1: Piece.NONE,
      B2: Piece.NONE,
      B3: Piece.NONE,
      C1: Piece.NONE,
      C2: Piece.NONE,
      C3: Piece.NONE,
    }
  ) {
    this._id = id;
    this._positions = positions;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get positions() {
    return this._positions;
  }

  set positions(value) {
    this._positions = value;
  }
}

export default Board;