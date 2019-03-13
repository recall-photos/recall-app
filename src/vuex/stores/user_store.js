import * as blockstack from "blockstack";

const UserStore = {
  namespaced: true,
  state: {
    loading: false,
    name: "",
    username: "",
    avatarUrl: "",
    authenticated: false
  },
  mutations: {
    loading(state, status) {
      const tmpState = state;
      tmpState.loading = status;
      return tmpState;
    },
    setUsername(state, username) {
      const tmpState = state;
      tmpState.username = username;
      return tmpState;
    },
    setName(state, name) {
      const tmpState = state;
      tmpState.name = name;
      return tmpState;
    },
    setAvatarUrl(state, avatarUrl) {
      const tmpState = state;
      tmpState.avatarUrl = avatarUrl;
      return tmpState;
    }
  },
  actions: {
    index(context) {
      context.commit("setUsername", blockstack.loadUserData().username);

      const { profile } = blockstack.loadUserData();
      const person = new blockstack.Person(profile);
      context.commit("setName", person.name());
      context.commit("setAvatarUrl", person.avatarUrl());
    }
  }
};

export default UserStore;
