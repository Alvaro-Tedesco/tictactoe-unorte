import beforeEnter from "./beforeEnter";

export default [
  {
    path: "/jogo",
    component: () => import(/* webpackChunkName: "game_root" */ "./pages/GameRoot.vue"),
    children: [
      {
        name: "game_room",
        path: "sala/:sessionId/:playerId",
        component: () => import(/* webpackChunkName: "game_room" */ "./pages/GameRoom.vue"),
        beforeEnter,
      },
      {
        name: "game_board",
        path: "tabuleiro/:sessionId/:playerId/:replay?",
        component: () => import(/* webpackChunkName: "game_board" */ "./pages/GameBoard.vue"),
        beforeEnter,
      },
    ],
  },
];
