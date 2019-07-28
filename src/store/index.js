import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/users";

Vue.use(Vuex);
// We are defining the Vuex store of the entire project here
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users
  }
});
