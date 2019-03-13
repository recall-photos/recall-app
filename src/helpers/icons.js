import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPowerOff,
  faUpload,
  faTrash,
  faDownload
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPowerOff);
library.add(faUpload);
library.add(faTrash);
library.add(faDownload);

Vue.component("font-awesome-icon", FontAwesomeIcon);
