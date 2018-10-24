import * as blockstack from 'blockstack';

const UserStore = {
  namespaced: true,
  state: {
    loading: false,
    username: '',
    authenticated: false,
  },
  mutations: {
    loading(state, status) {
      const tmpState = state;
      tmpState.loading = status;
      return tmpState;
    },
    set(state, username) {
      const tmpState = state;
      tmpState.username = username;
      return tmpState;
    },
  },
  actions: {
    index(context) {
      context.commit('set', blockstack.loadUserData().username);
    },
  },
};

export default UserStore;
