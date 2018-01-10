const ConsoleLogOnBuildWebpackPlugin = require("./plugins/consolelog-onbuildwebpack-plugin/ConsoleLogOnBuildWebpackPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Webpack = require("webpack");

module.exports = {
  entry: {
    a: "./src/entry/a.js",
    b: "./src/entry/b.js",
    c: "./src/entry/c.js",
    d: "./src/entry/d.js"
  },
  output: {
    filename: "[name].js",
    path: `${__dirname}/dist` // 输出目录`path`的绝对路径
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new Webpack.optimize.UglifyJsPlugin(),
    new ConsoleLogOnBuildWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
