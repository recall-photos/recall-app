<template>
  <div id="app" class="min-h-full relative">
    <TopMenu v-if="authenticated" />
    <router-view />
    <notifications group="errors" position="bottom right" />
  </div>
</template>

<script>
import * as blockstack from 'blockstack'
import TopMenu from '@/components/TopMenu.vue'

export default {
  name: 'App',
  data() {
    return this.$store.state.UserStore
  },
  methods: {
    logout() {
      blockstack.signUserOut(window.location.origin)
    }
  },
  components: {
    TopMenu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
@import url('https://rsms.me/inter/inter.css');

html,
body {
  font-family: 'Inter', sans-serif;
  height: 100%;
}
@supports (font-variation-settings: normal) {
  html {
    font-family: 'Inter var', sans-serif;
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
