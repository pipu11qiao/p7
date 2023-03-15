const fs = require("fs");
const path = require("path");
const util = require("./utils.js");

const colorInfo = {
  fieldArr: ["Color", "ActiveColor", "HoverColor", "TextColor"],
  data: [
    ,
    {
      field: "default",
      valueArr: ["#fff", "#3a8ee6", "#409eff", "#606266"],
    },
    {
      field: "primary",
      valueArr: ["#409eff", "#3a8ee6", "#66b1ff", "#fff"],
    },
    {
      field: "success",
      valueArr: ["#85ce61", "#5daf34", "#85ce61", "#fff"],
    },
    {
      field: "info",
      valueArr: ["#909399", "#82848a", "#a6a9ad", "#fff"],
    },
    {
      field: "waring",
      valueArr: ["#e6a23c", "#cf9236", "#ebb563", "#fff"],
    },
    {
      field: "danger",
      valueArr: ["#f56c6c", "#dd6161", "#f78989", "#fff"],
    },
  ],
};
const str = util.getVarStr(colorInfo, {
  rendertitle(element) {
    const { field } = element;
    return `// ${field} color`;
  },
});
console.log(str);
// fs.writeFileSync(path.resolve(__dirname, "./tmp/color.scss"), str, "utf-8");
