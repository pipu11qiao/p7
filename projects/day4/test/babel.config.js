module.exports = {
  // presets: ["@vue/cli-plugin-babel/preset"],
  "presets": [["es2015", { "modules": false }]],
  plugins: [
    [
      "component",
      {
        // 设置按需加载的包名
        libraryName: "p-ui",
        // 设置样式库的文件夹名称
        styleLibraryName: "styles",
      },
    ],
  ],
};