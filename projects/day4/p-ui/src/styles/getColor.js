const fs = require("fs");
const path = require("path");

const colorData = [
  {
    theme: "default",
    color: ["#fff", "#3a8ee6", "#409eff", "#606266"],
  },
  {
    theme: "primary",
    color: ["#409eff", "#3a8ee6", "#66b1ff", "#fff"],
  },
  {
    theme: "success",
    color: ["#85ce61", "#5daf34", "#85ce61", "#fff"],
  },
  {
    theme: "info",
    color: ["#909399", "#82848a", "#a6a9ad", "#fff"],
  },
  {
    theme: "waring",
    color: ["#e6a23c", "#cf9236", "#ebb563", "#fff"],
  },
  {
    theme: "danger",
    color: ["#f56c6c", "#dd6161", "#f78989", "#fff"],
  },
];

function generateColorScssFile(data) {
  let str = "";
  data.forEach((element) => {
    const { theme, color } = element;
    str += `
// ${theme} color
$${theme}Color: ${color[0]};
$${theme}ActiveColor: ${color[1]};
$${theme}HoverColor: ${color[2]};
$${theme}TextColor: ${color[3]};
  `;
  });
  return str;
}
const str = generateColorScssFile(colorData);
fs.writeFileSync(path.resolve(__dirname, "./color.scss"), str, "utf-8");
console.log(`str`, str);
