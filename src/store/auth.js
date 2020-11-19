export default {
  namespaced: true,

  state: {
    isAuthenticated: false,
    user: {},
  },

  mutations: {
    setUser: (state, user) => {
      state.isAuthenticated = true;
      state.user = user;
    },
    logOut: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
  },

  actions: {
    login: ({ commit }, user) => {
      commit("setUser", user);
    },
    logout: ({ commit }) => commit("logOut"),
  },

  getters: {
    api_token: (state) => state.user.api_token,
    user: (state) => state.user,
    roles: (state) => state.user.roles,
    permissions: (state) => state.user.permissions,
    isAuthenticated: (state) => state.isAuthenticated,
  },
};
