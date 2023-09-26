class Position {
  static A1 = new Position(0, 0);
  static A2 = new Position(0, 1);
  static A3 = new Position(0, 2);
  static B1 = new Position(1, 0);
  static B2 = new Position(1, 1);
  static B3 = new Position(1, 2);
  static C1 = new Position(2, 0);
  static C2 = new Position(2, 1);
  static C3 = new Position(2, 2);

  constructor(row, column) {
    this.value = {row, column};
  }
}

export default Position;
