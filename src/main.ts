import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import axios from "axios";
import VueI18n from "vue-i18n";
import appInitial from "./appInitial";

import "@/quasar";
import "@/styles/styles.scss";
import "@/lema";
import "@/extension-methods";
import "@/controls";
import { i18n } from "./i18n";

Vue.use(VueAxios, axios);
Vue.use(VueI18n);
Vue.config.productionTip = false;

appInitial().then(() => {
  new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
  }).$mount("#app");
})
