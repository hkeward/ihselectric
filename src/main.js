import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faBars,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

library.add(
  faPhoneAlt,
  faEnvelope,
  faBars,
  faArrowLeft,
  faArrowRight,
  faCircleXmark
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
