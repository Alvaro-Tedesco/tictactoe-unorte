class Position {
  static A1 = new Position("A1");
  static A2 = new Position("A2");
  static A3 = new Position("A3");
  static B1 = new Position("B1");
  static B2 = new Position("B2");
  static B3 = new Position("B3");
  static C1 = new Position("C1");
  static C2 = new Position("C2");
  static C3 = new Position("C3");

  constructor(value) {
    this.value = value;
  }

  static fromString(value) {
    const options = {
      [Position.A1.value]: Position.A1,
      [Position.A2.value]: Position.A2,
      [Position.A3.value]: Position.A3,
      [Position.B1.value]: Position.B1,
      [Position.B2.value]: Position.B2,
      [Position.B3.value]: Position.B3,
      [Position.C1.value]: Position.C1,
      [Position.C2.value]: Position.C2,
      [Position.C3.value]: Position.C3,
    };

    return options[value];
  }
}

export default Position;
