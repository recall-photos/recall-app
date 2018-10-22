<template>
  <div class="top-menu w-100 bg-light-gray pa3">
    <div class="mw9 center ph3-ns">
      <div class="tr f4">
        <a href="#" @click="upload" class="gray mh2">
          <font-awesome-icon icon="upload" />
        </a>
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
    upload() {
      console.log('Upload');
    },
    logout() {
      blockstack.signUserOut(window.location.origin);
    },
  },
};
</script>

<style scoped>

</style>
