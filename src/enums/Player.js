class Player {
  static PLAYER_1 = new Player("PLAYER_1", "1");
  static PLAYER_2 = new Player("PLAYER_2", "2");

  constructor(value, id) {
    this.id = id;
    this.value = value;
  }

  static getPlayer(code) {
    if (code === "1") {
      return Player.PLAYER_1;
    } else {
      return Player.PLAYER_2;
    }
  }
}

export default Player;
