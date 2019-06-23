//向外暴露一个打包的配置对象： 因为webpack 是基于Node构建的，所以 webpack 支持所有 Node API和语法
module.exports = {
    mode:'development',
    entry:'./src/index.js'
    //webpack 4.x的特性，约定大于配置，默认打包入口路径是 src-> index.js
}