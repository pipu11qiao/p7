import { createApp } from "vue";
import App from "./App.vue";
import PUI from "../../src/index.js";
// 加载样式
import "../../src/styles/index.scss";
console.log(PUI);

createApp(App).use(PUI).mount("#app");
