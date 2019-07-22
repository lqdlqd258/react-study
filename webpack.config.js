//向外暴露一个打包的配置对象： 因为webpack 是基于Node构建的，所以 webpack 支持所有 Node API和语法
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlPlugin = new HtmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})
//webpack 4.x的特性，约定大于配置，默认打包入口路径是 src-> index.js
module.exports = {
    devServer:{
        port:8080,
        progress:true,
        // open:true
    },
    plugins:[
        HtmlPlugin
    ],
    module:{    //所有第三放 模块的配置规则
        rules:[//第三方匹配规则
            {
                test:/\.js|jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env','@babel/preset-react']
                    }
                  },
                exclude: /(node_modules|bower_components)/,
            },//千万别忘记添加exclude 排除项
            {
                test:/\.css$/,
                //大家可以在 css-loader 之后，通过 ？ 追加参数 modules,为普通的css样式表，启用模块化
                use:['style-loader','css-loader']
            },
            {
                test:/\.ttf|woff|woff2|eot|svg$/,
                use:'url-loader'
            },
            {
                test:/\.scss$/,
                use:['style-loader',{
                    loader:'css-loader',
                    options: {
                    modules: {
                            mode: 'local',
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            context: path.resolve(__dirname, 'src'),
                            hashPrefix: 'my-custom-hash',
                        },
                    }
                },'sass-loader']
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'],   //表示，这些文件的后缀名，可以是省略不写
        alias:{
            '@':path.join(__dirname,'/src')
        }
    }

}