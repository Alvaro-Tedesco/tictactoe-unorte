import Vue from "vue";
import "./assets/scss/main.scss";
import axios from "./http";
import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
