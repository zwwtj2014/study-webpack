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
  }
};
