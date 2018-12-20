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
    create(context, files) {
      context.commit('loading', true);

      const writeOptions = { encrypt: true };
      const readOptions = { decrypt: true };
      const numberOfFiles = Array.from(files).length;

      readFile('photos.json', readOptions)
        .then((photosFile) => {
          let processedFiles = 0;
          const photos = JSON.parse(photosFile || '[]');

          Array.from(files).forEach((file) => {
            const photo = new Photo();
            photo.setFile(file);
            photos.unshift(photo);

            const reader = new FileReader();
            reader.onload = () => {
              const arrayBuffer = reader.result;

              imageCompression(file, 0.1, 800)
                .then((compressedFile) => {
                  writeFile(photo.compressedPath, compressedFile, writeOptions);

                  processedFiles += 1;
                  if (processedFiles === numberOfFiles * 2) {
                    const jsonString = JSON.stringify(photos);
                    writeFile('photos.json', jsonString, writeOptions);
                    context.commit('loading', false);
                  }
                })
                .catch((error) => {
                  console.log(error.message);
                });
              writeFile(photo.path, arrayBuffer, writeOptions)
                .then(() => {
                  context.commit('prepend', photo);

                  processedFiles += 1;
                  if (processedFiles === numberOfFiles * 2) {
                    const jsonString = JSON.stringify(photos);
                    writeFile('photos.json', jsonString, writeOptions);
                    context.commit('loading', false);
                  }
                });
            };
            reader.readAsArrayBuffer(file);
          });
        });
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
              writeFile(photo.compressedPath, '', writeOptions);
            });
        });
    },
  },
};

export default PhotoStore;
