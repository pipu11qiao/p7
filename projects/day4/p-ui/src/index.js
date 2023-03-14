const { version, name } = require("../package.json");
const install = (app) => {
  console.log(`app`, app);
};

export default {
  version,
  name,
  install,
};
