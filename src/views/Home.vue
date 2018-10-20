<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-if="authenticated">
      Logged in
    </div>
    <div v-else>Not logged in</div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import store from '@/store';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      authenticated: store.state.isAuthenticated,
    };
  },
};
</script>
