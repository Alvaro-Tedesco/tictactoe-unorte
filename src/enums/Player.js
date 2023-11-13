import Piece from "./Piece";

class Player {
  static PLAYER_1 = new Player("PLAYER_1", "1", Piece.ORANGE, "Jogador 1");
  static PLAYER_2 = new Player("PLAYER_2", "2", Piece.BLACK, "Jogador 2");
  static SPECTATOR = new Player("SPECTATOR", "3", Piece.NONE, "Espectador");

  constructor(value, id, piece, name) {
    this.id = id;
    this.value = value;
    this.piece = piece;
    this.name = name;
  }

  static fromId(id) {
    const options = {
      [Player.PLAYER_1.id]: Player.PLAYER_1,
      [Player.PLAYER_2.id]: Player.PLAYER_2,
    }

    return options[id];
  }

  static fromString(value) {
    const options = {
      [Player.PLAYER_1.value]: Player.PLAYER_1,
      [Player.PLAYER_2.value]: Player.PLAYER_2,
    }

    return options[value];
  }

  next() {
    if (this.value === Player.PLAYER_1.value) {
      return Player.PLAYER_2;
    } else {
      return Player.PLAYER_1;
    }
  }
}

export default Player;
