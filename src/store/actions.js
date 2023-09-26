import Session from "../models/Session";

import services from '../http';

export default {
  setSession({commit}, session) {
    if (session) {
      commit('SET_SESSION', Session.fromJSON(session));
    } else {
      commit('SET_SESSION', new Session());
    }
  },

  getSession({dispatch}, sessionId) {
    services.session.find({params: sessionId}).then((response) => {
      dispatch('setSession', response.data);
    }).catch((error) => {
      dispatch('setSession', null);
    })
  },
};