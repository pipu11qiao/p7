import { createApp } from "vue";
import App from "./App.vue";
import PUI,{Button,Aside,Container} from "../../src/index.js";
// 加载样式
import "../../src/styles/index.scss";
console.log(PUI);
console.log(`Button,Aside,Container`, Button,Aside,Container);

createApp(App).use(PUI).mount("#app");
