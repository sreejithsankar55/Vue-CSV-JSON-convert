import { api, setToken, clearToken } from "../api";
import Router from "../../router";
export default {
  //we perform the login logic part and verifying
  //basically a vuex store
  namespaced: true,
  state: {
    currentlogin: 0 //data which decides user is authorised or not
  },
  getters: {
    successcode(state) {
      console.log(state.currentlogin);
      return state.currentlogin;
    }
  },
  mutations: {
    setcurrentlogin(state, payload) {
      state.currentlogin = payload;
    }
  },
  actions: {
    loginUser: async function({ commit }, { email, password }) {
      clearToken();
      try {
        const response = await api.post("/login", {
          //sending a post request with below parameters as body
          email,
          password
        });
        if (response.status == 200) { 
          //verifying whether the auth is successful
          console.log("success");
        }
        if (response.data) {
          setToken(response.data.token);
          commit("setcurrentlogin", 200);
          Router.push("/converter");//directly redirecting to converter when the auth is successful
        }
      } catch (e) {
        console.error(e);
        throw e;
      }
    }
  }
};
