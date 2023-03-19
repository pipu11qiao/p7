import { createApp } from "vue";
import App from "./App.vue";

import { Button,Header } from "p-ui";
// import 'p-ui/lib/styles/button.css'
// console.log(`PUI`, PUI);

createApp(App)
.use(Button)
.use(Header)
.mount("#app");

console.log(`3`, 3);
