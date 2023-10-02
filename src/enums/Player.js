class Player {
  static PLAYER_1 = new Player("PLAYER_1", "1");
  static PLAYER_2 = new Player("PLAYER_2", "2");

  constructor(value, id) {
    this.id = id;
    this.value = value;
  }

  static fromId(id) {
    const options = {
      [Player.PLAYER_1.id]: Player.PLAYER_1,
      [Player.PLAYER_2.id]: Player.PLAYER_2,
    }

    return options[id];
  }
}

export default Player;
