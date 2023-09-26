import services from '../http';

export default {
  createSession(context, session) {
    context.commit('CREATE_SESSION', session);
  },

  getSession(context, sessionId) {
    services.session.find({params: sessionId}).then((response) => {
      context.commit('SET_SESSION', response.data);
    }).catch((error) => {
      context.commit('SET_SESSION', null);
    })
  }
}