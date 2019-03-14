import Vue from "vue";
import Vuex from "vuex";

import UserStore from "./stores/user_store";
import PhotoStore from "./stores/photo_store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    UserStore,
    PhotoStore
  }
});
