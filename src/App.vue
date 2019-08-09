<template>
  <div id="app">
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

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
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
