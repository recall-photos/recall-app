import { writeFile, readFile } from 'blockstack-large-storage';
import imageCompression from 'browser-image-compression';
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
      readFile('photos.json', readOptions)
        .then((file) => {
          const photos = JSON.parse(file || '[]');
          photos.sort((a, b) => (b.takenAt || 0) - (a.takenAt || 0));
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
      context.commit('loading', true);
      const photo = new Photo();
      photo.setFile(file);

      const writeOptions = { encrypt: true };
      const readOptions = { decrypt: true };

      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result;
        readFile('photos.json', readOptions)
          .then((photosFile) => {
            imageCompression(file, 0.1, 800)
              .then((compressedFile) => {
                writeFile(photo.compressedPath, compressedFile, writeOptions);
              })
              .catch((error) => {
                console.log(error.message);
              });
            writeFile(photo.path, arrayBuffer, writeOptions)
              .then(() => {
                const photos = JSON.parse(photosFile || '[]');
                photos.unshift(photo);
                const jsonString = JSON.stringify(photos);
                writeFile('photos.json', jsonString, writeOptions)
                  .then(() => {
                    context.commit('prepend', photo);
                    context.commit('loading', false);
                  });
              });
          });
      };
      reader.readAsArrayBuffer(file);
    },
    remove(context, photo) {
      context.commit('loading', true);
      const writeOptions = { encrypt: true };
      const readOptions = { decrypt: true };
      readFile('photos.json', readOptions)
        .then((photosFile) => {
          const photos = JSON.parse(photosFile || '[]');
          const index = photos.findIndex(element => element.uuid === photo.uuid);
          photos.splice(index, 1);
          const jsonString = JSON.stringify(photos);
          writeFile('photos.json', jsonString, writeOptions)
            .then(() => {
              writeFile(photo.path, '', writeOptions)
                .then(() => {
                  context.commit('remove', photo);
                  context.commit('loading', false);
                });
            });
        });
    },
  },
};

export default PhotoStore;
