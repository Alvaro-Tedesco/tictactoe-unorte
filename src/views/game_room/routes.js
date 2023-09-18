export default [
  {
    name: "game_room",
    path: "/jogo/:room_id/:player_id?",
    component: () => import(/* webpackChunkName: "game_room" */ "./GameRoom.vue"),
  },
];
