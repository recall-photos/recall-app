import Vue from "vue";
import "@/assets/css/tailwind.css";
import "intersection-observer";
import VueObserveVisibility from "vue-observe-visibility";
import VModal from "vue-js-modal";
import vueSmoothScroll from "vue2-smooth-scroll";
import VueScrollReveal from "vue-scroll-reveal";
import App from "./App.vue";
import router from "./router";
import store from "./vuex";
import "./helpers/icons";

Vue.use(vueSmoothScroll);
Vue.use(VueScrollReveal);
Vue.use(VModal);
Vue.use(VueObserveVisibility);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
