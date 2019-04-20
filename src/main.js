import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Resource from "vue-resource";
import VueFire from 'vuefire';


Vue.use(Resource);
Vue.use(VueFire);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
