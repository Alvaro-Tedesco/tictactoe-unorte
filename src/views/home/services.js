export default {
    create: {method: 'post', url: 'sessions/create'},
    all: {method: 'get', url: 'sessions/all'},
    find: {method: 'get', url: 'sessions/:sessionId'},
    setPlayer: {method: 'post', url: 'sessions/:sessionId/:playerId'},
};
