import Demo from "./src/main.vue";
import "../../css/demo.less";

Demo.install = function (Vue) {
  Vue.component(Demo.name, Demo);
};

export default Demo;
