import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPowerOff, faUpload, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPowerOff);
library.add(faUpload);
library.add(faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon);
