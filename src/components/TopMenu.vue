<template>
  <div class="top-menu w-100 bg-light-gray pa3">
    <div class="mw9 center ph3-ns">
      <div class="tr f4">
        <a href="#" @click="$refs.file.click()" class="gray mh2">
          <font-awesome-icon icon="upload" />
        </a>
        <input
          type="file"
          ref="file"
          id="upload-file-input"
          multiple
          @change="filesChange($event.target.name, $event.target.files)"
          accept="image/*"
          class="input-file"
          v-show="false"
        >
        <a href="#" @click="logout" class="gray mh2">
          <font-awesome-icon icon="power-off" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import * as blockstack from 'blockstack';

export default {
  name: 'TopMenu',
  methods: {
    logout() {
      blockstack.signUserOut(window.location.origin);
    },
    filesChange(name, files) {
      console.log('changed file');
      this.$store.dispatch('PhotoStore/create', files[0]);
    },
  },
};
</script>

<style scoped>

</style>
