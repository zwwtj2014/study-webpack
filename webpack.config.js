module.exports = {
    entry: ['./src/entry/a.js','./src/entry/b.js','./src/entry/c.js'],
    output: {
        filename: '[name].js',
        path: `${process.cwd()}/src` // 输出目录`path`的绝对路径
    }
};