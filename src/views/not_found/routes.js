export default [
  {
    name: "not_found",
    path: "/pagina-nao-encontrada",
    component: () => import(/* webpackChunkName: "not_found_page" */ "../not_found/pages/NotFoundPage.vue"),
  },
];
