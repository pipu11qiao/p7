let baseStr = `
.p-button--default {
  background-color: $defaultColor;
  color: $defaultTextColor;
  border-color: $defaultTextColor;
}
.p-button--default:hover {
  background-color: $defaultHoverColor;
  border-color: $defaultHoverColor;
}
.p-button--default:active {
  border-color: $defaultActiveColor;
}
`;
let resStr = "";
["default", "primary", "success", "info", "warning", "danger"].forEach(
  (item) => {
    resStr += baseStr.replace(/default/g, item);
  }
);
console.log(`resStr`, resStr);
