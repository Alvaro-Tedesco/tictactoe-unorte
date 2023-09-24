class Move {
    _player;
    _position;
    _piece;
    _id;

    constructor() {
        this._player = null;
        this._position = null;
        this._piece = null;
        this._id = null;
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
}
