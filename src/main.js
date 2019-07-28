import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "@/assets/css/tailwind.css";
import http from "axios";

Vue.prototype.$http = http;
Vue.config.productionTip = false;

new Vue({
  router, //adding router and store in instance
  store,
  render: h => h(App) //short hand render: function (createElement) { return createElement(App); }
}).$mount("#app");
