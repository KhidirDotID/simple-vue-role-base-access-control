import Vue from "vue";
import Vuex from "vuex";
import { VuexPersistence } from "vuex-persist";

import auth from "./auth";

const vuexPersist = new VuexPersistence({
  key: "my-app",
  storage: localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  modules: {
    auth,
  },
});
