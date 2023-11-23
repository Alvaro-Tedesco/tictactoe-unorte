import Session from "../models/Session";

import services from '../http';

export default {
  setSession({commit}, payload) {
    try {
      if (payload) {
        commit('SET_SESSION', payload instanceof Session ? payload : Session.fromJSON(payload));
      } else {
        commit('SET_SESSION', new Session());
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  getSession({dispatch}, sessionId) {
    return services.session.find({params: {sessionId}}).then((response) => {
      return dispatch('setSession', response.data);
    }).catch((error) => {
      console.error(error);
      return dispatch('setSession', null);
    })
  },

  getAllSessions() {
    return services.session.all({});
  },

  createSession({dispatch}) {
    return new Promise((resolve, reject) => {
      services.session.create({}).then((response) => {
        dispatch('setSession', response.data);

        resolve();
      }).catch((error) => {
        console.error(error);
        dispatch('setSession', null);

        reject(error);
      });
    });
  },

  setPosition({dispatch}, payload) {
    return services.gameRoom.move(payload).then((response) => {
      dispatch("setSession", response.data);
    });
  },

  setPlayer(state, payload) {
    return services.session.setPlayer(payload);
  },

  finishSession(state, sessionId) {
    return services.gameRoom.finish({params: {sessionId}});
  }
};
