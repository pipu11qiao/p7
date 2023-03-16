const path = require("path");

const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    // 入口文件需要将每个模块都单独打包，用于做极致的按需组件系统
    index: "./src/index.js",
    button: "./packages/button",
    aside: "./packages/aside",
    main: "./packages/main",
    container: "./packages/container",
    header: "./packages/header",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "lib"),
    library: {
      name: "PUI",
      type: "umd",
    },
    clean: true,
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
  externals: ["vue"],
};
