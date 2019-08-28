let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
   // devServer:{//开发服务器配置
   //     port: 3000,  //更改端口号
   //     progress: true, //打包进度条
   //     contentBase: './dist' //静态服务文件夹
   // },
    mode:'development',//模式  默认两种模式 production  development
    entry: './src/index.js',// 入口
    output: {
        filename: 'bundle.[hash:8].js', //打包后的文件名
        path: path.resolve(__dirname,'dist')
    },
    plugins:[ //数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html', //打包前文件
            filename: 'index.html', //打包后文件
            minify:{
                removeAttributeQuotes: true, //去除双引号
                collapseWhitespace: true //压缩到一行
            },
            hash: true //哈希值
        })

    ],
    module:{ //模块
        //loader
        rules: [
            // 规则 css-loader 解析  @import这种语法
            //style-loader 他是把css插入到head的标签中
            //loader的特点  单一  多个loader需要[] 默认是从右向左 从下到上还可以写成对象的方式
            //loader的特点  单一  多个loader需要[] 默认是从右向左 还可以写成对象的方式
            { test: /\.css$/, use:['style-loader','css-loader'] },
            { test:/\.less$/, use:['style-loader','css-loader','less-loader'] }
        ]
    }
}