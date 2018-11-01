/**
 *  author : liuzhuo
 *  date : 2018/11/1
 *  time : 16:35
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/[name].[contentHash].js",
    publicPath: "/service-worker"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      filename: "index.html"
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, './service-worker.js'),
      to: ""
    }])
  ]
};
