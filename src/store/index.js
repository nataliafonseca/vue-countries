import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTerm: "",
  },
  mutations: {
    SET_SEARCH(state, payload) {
      state.searchTerm = payload;
    },
  },
});