const fs = require("fs");
const path = require("path");

function getFirstUpper(str) {
  return str[0].toUpperCase(0) + str.slice(1);
}
function getStrFromFile(filePath) {
  return fs.readFileSync(filePath, "utf-8");
}
const classNameReg = /\[className\]/g;
const vueComponentNameReg = /\[vueComponentName\]/g;
const vueFileNameReg = /\[vueFileName\]/g;
const componentNameReg = /\[componentName\]/g;
function createComponentBaseFile(
  componentName,
  writeFilePath = path.resolve(__dirname, "./tmp")
) {
  let firstUpper = getFirstUpper(componentName);

  const vueFileName = firstUpper + ".vue";
  const indexFileName = "index.js";
  const hyphenName = "p-" + componentName;
  const vueComponentName = "P" + firstUpper;

  let vueTemplate = getStrFromFile(
    path.resolve(__dirname, "./template/Component.vue")
  );
  let vueRes = vueTemplate
    .replace(classNameReg, hyphenName)
    .replace(vueComponentNameReg, vueComponentName);
  let indexTemplate = getStrFromFile(
    path.resolve(__dirname, "./template/index.js")
  );
  let indexRes = indexTemplate
    .replace(vueComponentNameReg, vueComponentName)
    .replace(vueFileNameReg, vueFileName)
    .replace(componentNameReg, firstUpper);
  // dir .vue .js
  const dirName = writeFilePath + "/" + componentName;
  fs.mkdirSync(dirName);
  fs.writeFileSync(dirName + "/" + vueFileName, vueRes, "utf-8");
  fs.writeFileSync(dirName + "/" + indexFileName, indexRes, "utf-8");
}
module.exports = {
  createComponentBaseFile,
};
