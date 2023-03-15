const { version, name } = require("../package.json");
import * as Componets from "../packages";
export * from "../packages";

const install = (app) => {
  Object.keys(Componets).forEach((key) => {
    app.use(Componets[key]);
  });
};

export default {
  version,
  name,
  install,
  ...Componets,
};
