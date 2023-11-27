import Player from "../../enums/Player";

export default (to, from, next) => {
  const playersId = {
    [Player.PLAYER_1.id]: Player.PLAYER_1.value,
    [Player.PLAYER_2.id]: Player.PLAYER_2.value,
    [Player.SPECTATOR.id]: Player.SPECTATOR.value,
  };

  if (!playersId[to.params.playerId]) {
    next({name: "not_found",});
  } else {
    next();
  }
};
