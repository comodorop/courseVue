import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Products from "./views/products";
import Services from "./views/services";
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const routes = [
  { path: "/products", component: Products },
  { path: "/services", component: Services }
];
const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
