const {
  NodeJsInputFileSystem, // NodeJsInputFileSystem 比正常的 fs 多增加了一道 graceful-fs
  CachedInputFileSystem, //
  ResolverFactory
} = require("enhanced-resolve");

// create a resolver
const myResolver = ResolverFactory.createResolver({
  fileSystem: new CachedInputFileSystem(new NodeJsInputFileSystem(), 4000),
  extensions: [".js", ".json"]
});

// resolver a file with the new resolver
const context = {};
const lookupStartPath =
  "F:/GitHub/study-webpack/study-webpack/enhanced-resolve/lookupStartPath";
const request = "./path/to-look-up.js";

// 根据startPath找request, 输出绝对路径
myResolver.resolve(context, lookupStartPath, request, (err, filepath) => {
  if (err) {
    console.error(err);
  }
  console.log(filepath);
});
