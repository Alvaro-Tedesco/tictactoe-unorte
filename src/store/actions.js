export default {
  createSession(context, session) {
    context.commit('CREATE_SESSION', session);
  }
}