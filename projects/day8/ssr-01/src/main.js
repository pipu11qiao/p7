// import { createApp } from "vue";
// import "./style.css";
// import App from "./App.vue";
// import router from "./router";

// const app = createApp(App);
// app.use(router);

// app.mount("#app");

import { createSSRApp } from "vue";
import App from "./App.vue";

export function createApp() {
  const app = createSSRApp(App);
  return app;
}

// import { createSSRApp } from "vue";

// import { renderToString } from "vue/server-renderer";

// import App from "./App.vue";

// const app = createSSRApp(App);

// renderToString(app).then((html)=>{
//   console.log(`html`, html);
// });
