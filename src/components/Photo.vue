<template>
  <a href="#" @click="remove" class="db aspect-ratio aspect-ratio--1x1 dim">
    <img v-bind:src="localImageURL"
         style="position: absolute;left:0;top:0;width:100%;height: 100%;"
         alt="">
  </a>
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
  img {
    object-fit: cover;
  }
</style>
