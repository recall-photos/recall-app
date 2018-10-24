<template>
  <div class="photo">
    <a href="#" class="db aspect-ratio aspect-ratio--1x1 photo-link">
      <img v-bind:src="localImageURL"
           style="position: absolute;left:0;top:0;width:100%;height: 100%;"
           alt="">
    </a>

    <div class="photo-options ph2">
      <div class="tc">
        <a href="#" @click="remove" class="dib white">
          <font-awesome-icon icon="trash" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import * as blockstack from 'blockstack';
import photo from '@/models/photo';

export default {
  name: 'Photo',
  props: {
    instance: photo,
  },
  methods: {
    remove() {
      this.$store.dispatch('PhotoStore/remove', this.instance);
    },
  },
  data() {
    return {
      localImageURL: '',
    };
  },
  beforeMount() {
    blockstack.getFile(this.instance.path)
      .then((data) => {
        const blob = new Blob([data], { type: 'image/jpeg' });
        const urlCreator = window.URL || window.webkitURL;
        const imageUrl = urlCreator.createObjectURL(blob);
        this.localImageURL = imageUrl;
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
    width: 40px;
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

  .photo:hover .photo-options {
    visibility: visible;
  }
</style>
