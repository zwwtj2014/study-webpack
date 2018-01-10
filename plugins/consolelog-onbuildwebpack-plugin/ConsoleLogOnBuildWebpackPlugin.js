/*
 * @Author: clam
 * @Date: 2018-01-08 23:43:55
 * @Last Modified by: clam
 * @Last Modified time: 2018-01-08 23:52:55
 */

/**
 * webpack 插件是一个具有 `apply` 属性的js对象.
 * `apply` 属性会被webpack compiler编译, 并且compiler对象可在整个编译周期访问.
 */

function ConsoleLogOnBuildWebpackPlugin() {}

ConsoleLogOnBuildWebpackPlugin.prototype.apply = function(compiler) {
  compiler.plugin("run", function(compiler, callback) {
    console.log("webpack 构建过程开始!!!");

    callback();
  });
};

module.exports = exports = ConsoleLogOnBuildWebpackPlugin;
