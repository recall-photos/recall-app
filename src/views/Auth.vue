<template>
  <div class="hello">
    <button @click="login">Login</button>
  </div>
</template>

<script>
import * as blockstack from 'blockstack';

export default {
  name: 'HelloWorld',
  methods: {
    login() {
      const { origin } = window.location;
      blockstack.redirectToSignIn(origin, `${origin}/manifest.json`, ['store_write', 'publish_data']);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
