//这个配置文件,其实就是一个 JS 文件,通过 Node 中的mu'o
const path = require('path')
const webpack = require('webpack')
//导入在内存中生成 HTML 页面的插件
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 需要手动指定入口和出口
  entry: path.join(__dirname, './src/main.js'), // 入口,表示要使用 webpack 打包哪个文件
  output: {
    //输出文件,相关配置
    path: path.join(__dirname, './dist'), //指定打包好的文件, 输出到哪个目录中去
    filename: 'bundle.js' // 这是指定 输出的文件名称
  },
  devServer: {
    //这是配置 dev-server 命令参数的第二种形式
    open: true, //自动打开浏览器
    port: 3000, //设置启动游戏的运行端口,
    contentBase: 'src', //指定托管的根目录
    hot: true
  },
  plugins: [ // 配置插件的节点
    new webpack.HotModuleReplacementPlugin(), // new 一个热更新的模块对象,这是启用热更新的第一步
    new htmlWebpackPlugin({
      //创建一个在内存中 生成 html 页面的插件
      template: path.join(__dirname, './src/index.html'), // 指定 模板页面, 将来会根据指定的页面路径,生成内存中的页面
      filename: 'index.html' //指定生成的页面的名称
    })
  ],
  module: {
    //这个节点用来配置所有第三方模块加载器
    rules: [
      //所有第三方加载器
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], //配置处理 .css 文件的 第三方 loader 规则
      },
      {
        //这是配置处理 .less 文件的第三方
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
        // 处理 .scss 文件的第三方 loader 规则
      }
    ]
  }
}

//当我们在 控制台 ,直接输入 webpack 命令执行的时候, webpack 做了以下几个步骤
// 1. 首先, webpack 发现,我们并没有通过命令的形式,给他指定入口和出口
// 2. webpack 就会去 项目的 根目录中, 查找一个叫做 'webpack.config.js'的配置文件
// 3. 当找到配置文件后, webpack  会去解析执行这个 配置文件, 当解析执行完配置文件后, 就得到了配置文件中,导出的配置对象 
// 4. 当 webpack 拿到 配置对象后, 就拿到了 配置对象中, 指定的入口 和 出口, 然后进行打包构建