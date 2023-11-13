import Player from "../enums/Player";

export default {
  session: (state) => state.session,

  sessionId: (state) => state.session.id,

  result: (state) => state.session.result,

  board: (state) => state.session.board,

  /**
   * @returns {Player}
   */
  turn: (state) => {
    if (state.session.history.length === 0) {
      return Player.PLAYER_1;
    }

    return state.session.history[state.session.history.length - 1]?.player.next();
  },

  lastPlayer: (state) => {
    return state.session.history[state.session.history.length - 1]?.player;
  },
};
