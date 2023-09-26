import Session from "../models/Session";

export default {
  setSession({commit}, session) {
    const newSession = Session.fromJSON(session);

    commit('SET_SESSION', newSession);
  },
};
