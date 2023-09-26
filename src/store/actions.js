import Session from "../models/Session";

import services from '../http';

export default {
  setSession({commit}, session) {
    const newSession = Session.fromJSON(session);

    commit('SET_SESSION', newSession);
  },

  getSession(context, sessionId) {
    services.session.find({params: sessionId}).then((response) => {
      context.commit('SET_SESSION', response.data);
    }).catch((error) => {
      context.commit('SET_SESSION', null);
    })
  },
};