import Piece from "../enums/Piece";
import Position from "../enums/Position";
import Player from "../enums/Player";

class Move {
  _player;
  _position;
  _piece;
  _id;

  constructor(id = null, piece = null, player = null, position = null) {
    this._id = id;
    this._piece = piece;
    this._player = player;
    this._position = position;
  }

  get player() {
    return this._player;
  }

  set player(value) {
    this._player = value;
  }

  get position() {
    return this._position;
  }

  set position(value) {
    this._position = value;
  }

  get piece() {
    return this._piece;
  }

  set piece(value) {
    this._piece = value;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  static fromJSON(json) {
    return new Move(
      json.id,
      Piece.fromString(json.piece),
      Player.fromString(json.player),
      Position.fromString(json.position),
    )
  }
}

export default Move;