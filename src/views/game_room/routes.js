export default [
  {
    name: "game_room",
    path: "/jogo/:room_id/:player_id?",
    component: () => import(/* webpackChunkName: "game_room" */ "./GameRoom.vue"),
  },
  {
    name: "game_board",
    path: "/tabuleiro",
    component: () => import(/* webpackChunkName: "game_board" */ "./TestBoard.vue"),
  },
];
