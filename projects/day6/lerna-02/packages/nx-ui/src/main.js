import Vue from "vue";
import App from "./App.vue";
// import Nx from "../packages/index";
import Nx from "../library/nx-ui.umd";

// 全局引入
// 局部引入

// Vue.use
Vue.use(Nx);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
