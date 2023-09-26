import Session from "../models/Session";

export default {
  createSession(context, session) {
    context.commit('CREATE_SESSION', session);
  }
}
    const newSession = Session.fromJSON(session);