import Session from "../models/Session";

import services from '../http';

export default {
  setSession({commit}, payload) {
    if (payload) {
      commit('SET_SESSION', Session.fromJSON(payload));
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