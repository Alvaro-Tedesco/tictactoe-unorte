import Board from "./Board";
import Result from "../enums/Result";

class Session {
  _id;
  _board;
  _result;
  _history;

  constructor(
    id = null,
    board = new Board(),
    result = Result.NONE,
    history = [],
  ) {
    this._id = id;
    this._board = board;
    this._result = result;
    this._history = history;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get board() {
    return this._board;
  }

  set board(value) {
    this._board = value;
  }

  get result() {
    return this._result;
  }

  set result(value) {
    this._result = value;
  }

  get history() {
    return this._history;
  }

  set history(value) {
    this._history = value;
  }

  static fromJSON(session) {
    return new Session(
      session.id,
      Board.fromJSON(session.board),
      Result.fromString(session.result),
      session.history,
    );
  }
}

export default Session;
