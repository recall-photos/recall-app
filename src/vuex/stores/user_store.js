import * as blockstack from 'blockstack';

const UserStore = {
  namespaced: true,
  state: {
    loading: false,
    username: '',
    authenticated: false,
    photos: [],
  },
  mutations: {
    loading(state, status) {
      const tmpState = state;
      tmpState.loading = status;
      return tmpState;
    },
    many(state, data) {
      const tmpState = state;
      tmpState.photos = data;
      return tmpState;
    },
  },
  actions: {
    index(context) {
      context.commit('loading', true);
      const readOptions = { decrypt: true };
      blockstack.getFile('photos.json', readOptions)
        .then((file) => {
          const statuses = JSON.parse(file || '[]');
          context.commit('many', statuses);
          context.commit('loading', false);
        })
        .catch(() => {
          context.commit('loading', false);
        });
    },
  },
};

export default UserStore;
