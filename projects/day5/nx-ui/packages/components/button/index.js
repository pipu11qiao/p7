import Button from "./src/main.vue";
import "../../css/button.less";

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
