import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toasted from "vue-toasted";
import VModal from "vue-js-modal";

Vue.config.productionTip = false;
Vue.use(Toasted);
Vue.use(VModal);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
