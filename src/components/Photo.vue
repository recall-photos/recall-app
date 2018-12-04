<template>
  <div class="photo">
    <a href="#"
       @click="openModal"
       class="db aspect-ratio aspect-ratio--1x1 photo-link">
      <img v-bind:src="compressedLocalImageURL || fullLocalImageURL"
           style="position: absolute;left:0;top:0;width:100%;height: 100%;"
           alt="">
    </a>

    <div class="photo-options ph2">
      <div class="tc">
        <a href="#" @click="downloadPhoto" class="icon dib white">
          <font-awesome-icon icon="download" />
        </a>
        <a href="#" @click="remove" class="icon dib white">
          <font-awesome-icon icon="trash" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { readFile } from 'blockstack-large-storage';
import resetImageOrientation from 'orientation-exif-blob';
import exif from 'exif-js';
import photo from '@/models/photo';

export default {
  name: 'Photo',
  props: {
    instance: photo,
  },
  methods: {
    remove(e) {
      e.preventDefault();
      this.$store.dispatch('PhotoStore/remove', this.instance);
    },
    downloadPhoto(e) {
      e.preventDefault();
      if (this.fullLocalImageURL) {
        const anchor = document.createElement('a');
        anchor.href = this.fullLocalImageURL;
        anchor.target = '_blank';
        anchor.download = this.instance.name;
        anchor.click();
      } else {
        this.$store.commit('PhotoStore/loading', true);
        readFile(this.instance.path)
          .then((data) => {
            const file = new Blob([data], { type: 'image/jpeg' });
            resetImageOrientation(file, (blob) => {
              this.$store.commit('PhotoStore/loading', false);
              this.fullLocalImageURL = blob;
              const anchor = document.createElement('a');
              anchor.href = blob;
              anchor.target = '_blank';
              anchor.download = this.instance.name;
              anchor.click();
            });
          });
      }
    },
    openModal(e) {
      e.preventDefault();
      if (this.fullLocalImageURL) {
        this.$emit('open', this.instance, this.fullLocalImageURL);
      } else {
        this.$store.commit('PhotoStore/loading', true);
        readFile(this.instance.path)
          .then((data) => {
            const file = new Blob([data], { type: 'image/jpeg' });
            resetImageOrientation(file, (blob) => {
              this.$store.commit('PhotoStore/loading', false);
              this.fullLocalImageURL = blob;
              this.$emit('open', this.instance, blob);
            });
          });
      }
    },
  },
  data() {
    return {
      fullLocalImageURL: null,
      compressedLocalImageURL: null,
    };
  },
  beforeMount() {
    readFile(this.instance.compressedPath || this.instance.path)
      .then((data) => {
        const file = new Blob([data], { type: 'image/jpeg' });

        if (this.instance.compressedPath && this.instance.orientation) {
          const img = new Image();

          img.onload = () => {
            exif.getData(img, () => {
              const { width, height } = img;
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              const srcOrientation = this.instance.orientation;

              if ([5, 6, 7, 8].indexOf(srcOrientation) > -1) {
                canvas.width = height;
                canvas.height = width;
              } else {
                canvas.width = width;
                canvas.height = height;
              }

              switch (srcOrientation) {
                case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
                case 3: ctx.transform(-1, 0, 0, -1, width, height); break;
                case 4: ctx.transform(1, 0, 0, -1, 0, height); break;
                case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
                case 6: ctx.transform(0, 1, -1, 0, height, 0); break;
                case 7: ctx.transform(0, -1, -1, 0, height, width); break;
                case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
                default: ctx.transform(1, 0, 0, 1, 0, 0);
              }

              ctx.drawImage(img, 0, 0);
              canvas.toBlob((blob) => {
                this.compressedLocalImageURL = URL.createObjectURL(blob);
              }, 'image/jpeg');
            });
          };

          img.src = URL.createObjectURL(file);
        } else {
          resetImageOrientation(file, (blob) => {
            if (this.instance.compressedPath) {
              this.compressedLocalImageURL = blob;
            } else {
              this.fullLocalImageURL = blob;
            }
          });
        }
      });
  },
};
</script>

<style scoped>
  .photo {
    position: relative;
  }

  img {
    object-fit: cover;
  }

  .photo:hover > .photo-link > img {
    opacity: 0.5;
  }

  .photo-options {
    width: 80px;
    height: 40px;
    background-color: rgb(70,121,231);
    line-height: 40px;
    visibility: hidden;
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 999;
    border-radius: 0 0 0 20px;
  }

  .photo-options .icon {
    margin-left: 6px;
    margin-right: 6px;
  }

  .photo:hover .photo-options {
    visibility: visible;
  }
</style>
