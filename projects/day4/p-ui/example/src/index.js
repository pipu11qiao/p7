import { createApp } from "vue";
import App from "./App.vue";
import PUI from "../../src/index.js";
console.log(PUI);

createApp(App).use(PUI).mount("#app");
