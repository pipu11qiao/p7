import Button from "../button/index.js";
import Demo from "../demo/index.js";

// import "../../css/index.less";

const components = {
  Button,
  Demo,
};
const install = function (Vue) {
  // vue.use 会阻止多次重复注册

  Object.keys(components).forEach((component) => {
    Vue.component(components[component].name, components[component]);
  });
};

const API = {
  install,
};

export default API;
