<template>
  <div class="home">
    <div class="mt4 ph5 dt">
        <img alt="Recall Logo" class="w4" src="../assets/logo.png">
    </div>
    <div class="mt6">
      <h1 class="f2 fw4 ph7 lh-copy helvetica">The most secure, free, end-to-end encrypted and open-source alternative to Google Photos</h1>
      <div class="mt5">
        <div v-if="authenticated">
          Logged in
        </div>
        <div v-else>
          <button @click="login"
                  class="no-underline near-white bg-animate bg-purple hover-bg-white hover-black inline-flex items-center ma2 tc br2 pa2 pointer">
            <img alt="Blockstack Logo" class="w2 fl" src="../assets/blockstack.svg">
            <span class="f6 ml3 pr2 helvetica">Sign in with Blockstack</span>
          </button>
        </div>
      </div>
      <div>
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
  <img src="http://placekitten.com/g/600/300" class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing.">
  <div class="pa2 ph3-ns pb3-ns">
    <div class="dt w-100 mt1">
      <div class="dtc">
        <h1 class="f5 f4-ns mv0">Cat</h1>
      </div>
      <div class="dtc tr">
        <h2 class="f5 mv0">$1,000</h2>
      </div>
    </div>
    <p class="f6 lh-copy measure mt2 mid-gray">
      If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
      and touch water with paw then recoil in horror.
    </p>
  </div>
</article>
      </div>
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
