// wepback 基于node
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: {
    button: "./packages/components/button/index.js",
    demo: "./packages/components/demo/index.js",
  },
  output: {
    // 打包后的资源文件存放位置，必须是绝对路径
    path: path.resolve(__dirname, "./dist"),

    // 打包后的资源文件
    filename: "[name]-[hash:6].umd.js",
    library: "nx-ui",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],

  mode: "development",
};
