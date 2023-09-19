export default [
  {
    path: '/jogo',
    component: () => import(/* webpackChunkName: "game_root" */ "./GameRoot.vue"),
    children: [
      {
        name: "game_room",
        path: "/sala/:room_id/:player_id?",
        component: () => import(/* webpackChunkName: "game_room" */ "./GameRoom.vue"),
      },
      {
        name: "game_board",
        path: "/jogo/:room_id/:player_id",
        component: () => import(/* webpackChunkName: "game_board" */ "./GameBoard.vue"),
      },
    ],
  },
];
