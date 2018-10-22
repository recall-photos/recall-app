import Vue from 'vue';
import Router from 'vue-router';
import * as blockstack from 'blockstack';
import store from './vuex';

import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';

Vue.use(Router);

const resolveAuth = (to, from, next) => {
  if (blockstack.isUserSignedIn()) {
    store.state.UserStore.authenticated = true;
    next('/dashboard');
    return;
  } else if (blockstack.isSignInPending()) {
    blockstack.handlePendingSignIn()
      .then(() => {
        store.state.UserStore.authenticated = true;
        next('/dashboard');
      });
    return;
  }
  next();
};

const ifAuthenticated = (to, from, next) => {
  if (store.state.UserStore.authenticated) {
    next();
    return;
  }
  next('/');
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: resolveAuth,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: ifAuthenticated,
    },
  ],
});
