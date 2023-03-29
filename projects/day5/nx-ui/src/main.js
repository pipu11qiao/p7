import Vue from "vue";
import App from "./App.vue";
import Demo from "../packages/components/demo/index.js";
// import "../packages/css/demo.css";
import Button from "../packages/components/button/index.js";
// import "../packages/css/button.css";

// 全局引入
// 局部引入

// Vue.use
Vue.use(Demo);
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
