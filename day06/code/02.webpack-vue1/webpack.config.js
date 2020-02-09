// 由于 webpack 是基于 node 构建的, 所以webpack 的配置文件中,任何合法的 Node 代码都是支持的
var path = require('path')

const {
  VueLoaderPlugin
} = require('vue-loader')

//在内存中根据模板页面,生成一个相同的首页,同时自动把打包好的 bundle 注入到页面底部
//若要配置插件,需要在导出的对象中,挂在一个 plugins 节点
var htmlWebpackPlugin = require('html-webpack-plugin')
// 当以命令行运行 webpack 或 webpack-dev-server 的时候, 工具会发现, 我们并没有提供 要打包的文件的入口和 出口 文件, 此时他们会检查项目根目录中的配置文件, 并读取这个文件,就拿到了导出的这个配置对象,然后根据这个对象,进行打包构建
module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'), //输出路径
    filename: 'bundle.js' //指定输出文件的名称
  },
  mode: 'development',
  //所有 webpack 插件的配置节点
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), //指定模板文件路径
      filename: 'index.html' //指定生成的文件名称
    }),
    new VueLoaderPlugin()
  ],
  module: { //配置所有第三方 loader 模块的
    rules: [ //第三方模块的匹配规则
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { //处理图片路径的 loader 
        test: /\.(jpg|png|gif|bmp|jped)$/,
        use: 'url-loader?limit=122&name=[hash:8]-[name].[ext]'
        // limit 给定的值,是图片的大小,单位是 byte ,如果我们引用的 图片,大于或等于给定的 limit值,则不会被转为base64格式的字符串, 如果图片小于给定的 limit值,则会被转为 base64

      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: 'url-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }

    ]
  },
  // resolve: {
  //   alias: {
  //     //设置 vue 被导入时候的包的路径
  //     "vue$": "vue/dist/vue.js"
  //   }
  // }
}