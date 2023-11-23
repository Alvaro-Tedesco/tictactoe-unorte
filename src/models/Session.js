import Board from "./Board";
import Result from "../enums/Result";
import Move from "./Move";
import Piece from "../enums/Piece";
import Player from "../enums/Player";

class Session {
  _id;
  _board;
  _result;
  _history;
  _ready;
  _players;

  constructor(
    id = null,
    board = new Board(),
    result = Result.NONE,
    history = [],
    ready = false,
    players = [],
  ) {
    this._id = id;
    this._board = board;
    this._result = result;
    this._history = history;
    this._ready = ready;
    this._players = players;
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

  /**
   * @returns {Array<Move>}
   */
  get history() {
    return this._history;
  }

  set history(value) {
    this._history = value;
  }

  get ready() {
    return this._ready;
  }

  set ready(value) {
    this._ready = value;
  }

  get players() {
    return this._players;
  }

  set players(value) {
    this._players = value;
  }

  static fromJSON(json) {
    return new Session(
      json.id,
      Board.fromJSON(json.board),
      Result.fromString(json.result),
      json.history.map((item) => Move.fromJSON(item)),
      json.ready,
      json.players.map((item) => Player.fromString(item)),
    );
  }

  static nextMove(session, move) {
    const originalHistoryLength = session.history.length;

    let control = false;
    const history = session.history.filter((item) => {
      if (control) {
        return false;
      }

      if (item.id === move.id) {
        control = true;
        return true;
      }

      return true;
    });

    const positions = {
      A1: Piece.NONE,
      A2: Piece.NONE,
      A3: Piece.NONE,
      B1: Piece.NONE,
      B2: Piece.NONE,
      B3: Piece.NONE,
      C1: Piece.NONE,
      C2: Piece.NONE,
      C3: Piece.NONE,
    };
    for (const move of history) {
      positions[move.position.value] = move.piece;
    }

    const board = new Board(
      session.board.id,
      positions,
    );

    return new Session(
      session.id,
      board,
      originalHistoryLength === history.length ? session.result : Result.NONE,
      history,
    )
  }

  clone() {
    return new Session(
      this.id,
      this.board,
      this.result,
      this.history,
      this.ready,
      this.players,
    )
  }
}

export default Session;
