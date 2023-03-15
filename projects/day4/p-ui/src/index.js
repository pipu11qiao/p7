const { version, name } = require("../package.json");
import Button from "../packages/button";
import { Nav } from "../packages/nav";
const install = (app) => {
  app.use(Button);
  app.use(Nav);
  console.log(`app`, app);
};

export default {
  version,
  name,
  install,
};
