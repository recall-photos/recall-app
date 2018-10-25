import * as blockstack from 'blockstack';
import Photo from '@/models/photo';

const PhotoStore = {
  namespaced: true,
  state: {
    loading: false,
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
    prepend(state, data) {
      const tmpState = state;
      tmpState.photos.unshift(data);
      return tmpState;
    },
    remove(state, photo) {
      const tmpState = state;
      const photos = tmpState.photos.filter(element => element.uuid !== photo.uuid);
      tmpState.photos = photos;
      return tmpState;
    },
  },
  actions: {
    index(context) {
      context.commit('loading', true);
      const readOptions = { decrypt: true };
      blockstack.getFile('photos.json', readOptions)
        .then((file) => {
          const photos = JSON.parse(file || '[]');
          const parsedPhotos = photos.map((p) => {
            const photo = new Photo();
            photo.fromObject(p);
            return photo;
          });
          context.commit('many', parsedPhotos);
          context.commit('loading', false);
        })
        .catch(() => {
          context.commit('loading', false);
        });
    },
    create(context, file) {
      const photo = new Photo();
      photo.setFile(file);

      const writeOptions = { encrypt: true };
      const readOptions = { decrypt: true };

      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result;
        blockstack.getFile('photos.json', readOptions)
          .then((photosFile) => {
            blockstack.putFile(photo.path, arrayBuffer, writeOptions)
              .then(() => {
                const photos = JSON.parse(photosFile || '[]');
                photos.unshift(photo);
                const jsonString = JSON.stringify(photos);
                console.log(jsonString);
                blockstack.putFile('photos.json', jsonString, writeOptions)
                  .then(() => {
                    context.commit('prepend', photo);
                  });
              });
          });
      };
      reader.readAsArrayBuffer(file);
    },
    remove(context, photo) {
      const writeOptions = { encrypt: true };
      const readOptions = { decrypt: true };
      blockstack.getFile('photos.json', readOptions)
        .then((photosFile) => {
          const photos = JSON.parse(photosFile || '[]');
          const index = photos.findIndex(element => element.uuid === photo.uuid);
          photos.splice(index, 1);
          const jsonString = JSON.stringify(photos);
          blockstack.putFile('photos.json', jsonString, writeOptions)
            .then(() => {
              blockstack.putFile(photo.path, '', writeOptions)
                .then(() => {
                  context.commit('remove', photo);
                });
            });
        });
    },
  },
};

export default PhotoStore;
