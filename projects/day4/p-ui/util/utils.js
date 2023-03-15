
const createComponent = require("./createComponent/index");
const { createComponentBaseFile } = createComponent;

function getVarStr(info, { rendertitle } = {}) {
  let str = "";
  const { fieldArr, data } = info;
  data.forEach((element) => {
    const { field, valueArr } = element;
    if (rendertitle && typeof rendertitle === "function") {
      str += rendertitle(element);
      str += "\n";
    }
    fieldArr.forEach((backField, i) => {
      str += `$${field}${backField}: ${valueArr[i]};`;
      str += "\n";
    });
  });
  return str;
}
module.exports = {
  getVarStr,
  createComponentBaseFile,
};
