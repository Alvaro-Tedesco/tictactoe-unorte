import {createApp} from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/scss/main.scss";
import "./http";

const Vue = createApp(App);

Vue.config.productionTip = false;
Vue.use(store);
Vue.use(router);
Vue.mount("#app");
