<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-if="authenticated">
      Logged in
    </div>
    <div v-else>
      <button @click="login"
              class="f6 link dim ba ph3 pv2 mb2 dib black bw1 fw1 tc ttu tracked pointer">
        Login
      </button>
    </div>
  </div>
</template>

<script>
import * as blockstack from 'blockstack';

export default {
  name: 'home',
  methods: {
    login() {
      const { origin } = window.location;
      blockstack.redirectToSignIn(origin, `${origin}/manifest.json`, ['store_write', 'publish_data']);
    },
  },
  data() {
    return {
      authenticated: this.$store.state.isAuthenticated,
    };
  },
};
</script>
