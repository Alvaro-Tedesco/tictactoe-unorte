export default [
  {
    name: 'login',
    path: 'login/:room_id',
    component: () => import('./pages/LoginPage.vue')
  }
];