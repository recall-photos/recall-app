import Vue from 'vue';
import Router from 'vue-router';
import * as blockstack from 'blockstack';
import store from './store';

import Home from './views/Home.vue';
import Auth from './views/Auth.vue';
import Dashboard from './views/Dashboard.vue';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (blockstack.isSignInPending()) {
    blockstack.handlePendingSignIn()
      .then(() => {
        store.state.isAuthenticated = true;
        next('/dashboard');
      });
    return;
  } else if (!blockstack.isUserSignedIn()) {
    next();
    return;
  }
  next('/');
};

const resolveAuth = (to, from, next) => {
  if (blockstack.isUserSignedIn()) {
    store.state.isAuthenticated = true;
    next('/dashboard');
    return;
  } else if (blockstack.isSignInPending()) {
    blockstack.handlePendingSignIn()
      .then(() => {
        store.state.isAuthenticated = true;
      });
    next('/dashboard');
    return;
  }
  next();
};

const ifAuthenticated = (to, from, next) => {
  if (store.state.isAuthenticated) {
    next();
    return;
  }
  next('/auth');
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
      path: '/auth',
      name: 'auth',
      component: Auth,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: ifAuthenticated,
    },
  ],
});
