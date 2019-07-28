import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
//defining the routes for each request
export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login" //to map the default path as login
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/converter",
      name: "converter",
      component: () => import("./views/Converter.vue")
    },
    {
      path: "*",
      redirect: "/login" //if any undefined url is hit it automatically redirects to login
    }
  ]
});
