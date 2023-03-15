const fs = require("fs");
const path = require("path");
const util = require("./utils.js");

const info = {
  fieldArr: ["PaddingTop", "PaddingLeft"],
  data: [
    {
      field: "small",
      valueArr: ["2px", "5px"],
    },
    {
      field: "default",
      valueArr: ["5px", "10px"],
    },
    {
      field: "large",
      valueArr: ["9px", "14px"],
    },
  ],
};
const str = util.getVarStr(info, {
  rendertitle(element) {
    const { field } = element;
    return `// ${field} padding`;
  },
});

console.log(str);
// fs.writeFileSync(path.resolve(__dirname, "../color.scss"), str, "utf-8");
