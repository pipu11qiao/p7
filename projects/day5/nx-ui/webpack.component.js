// wepback 基于node
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    button: "./packages/components/button/index.js",
    demo: "./packages/components/demo/index.js",
    index: "./packages/components/index/index.js",
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
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
  ],

  mode: "development",
};
