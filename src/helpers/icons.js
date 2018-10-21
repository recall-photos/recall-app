import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPowerOff, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPowerOff);
library.add(faUpload);

Vue.component('font-awesome-icon', FontAwesomeIcon);
