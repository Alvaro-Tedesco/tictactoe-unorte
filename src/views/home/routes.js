export default [
  {
    path: "/",
    name: "base-home",
    redirect: "inicio",
    component: () => import("./pages/BaseHome.vue"),
    children: [
      {
        name: "home",
        path: "inicio",
        component: () => import("./pages/HomePage.vue"),
      },
      {
        name: "matches",
        path: "partidas",
        component: () => import("./pages/MatchesPage.vue"),
      },
      {
        name: 'login',
        path: 'login/:sessionId',
        component: () => import('../home/pages/LoginPage.vue')
      }
    ],
  },
];