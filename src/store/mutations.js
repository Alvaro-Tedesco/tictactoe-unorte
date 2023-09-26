import Session from "../models/Session";

export default {
  SET_SESSION(state, session) {
    if (session) {
      state.session = Session.fromJson(session);
    } else {
      state.session = new Session();
    }
  },
};