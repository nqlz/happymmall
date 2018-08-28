/*
* @Author: tradeoff
* @Date:   2018-08-15 23:41:50
 * @Last Modified by: nqlz
 * @Last Modified time: 2018-08-28 20:47:33
*/
var webpack = require('webpack');
var Ex      = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//环境变量配置，dev  /  online
var WEBPACK_ENV =process.env.WEBPACK_ENV || 'dev';
console.log(WEBPACK_ENV);

//获取html-webpack-plugin参数的方法。
var getHtmlConfig=function (name){
    return {
          template:'./src/view/' + name + '.html',
          filename:'view/' + name + '.html',
          inject:true,
          hash:true,
          chunks:['common', name ]
    }
}
//webpack config
var config = {
  entry:{
    'common':['./src/page/common/index.js'],
  	'index':['./src/page/index/index.js'],
  	'login':['./src/page/login/index.js'],
  },
  devServer :{
    
    compress:true,
    port:8089
    
},
  output:{
      path:'./dist',
      publicPath:'/dist',
  		filename:'js/[name].js',

  	},

  externals:{
    'jquery':'window.jQuery'
  },
   module: {
    loaders: [
      { test: /\.css$/, loader: Ex.extract('style-loader', 'css-loader','less-loader') },
      { test: /\.(gif|png|jpg|woff|svg|eot|tty)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' }
    ]
  },
  plugins:[
  //独立通用模块到js/base.js
     new webpack.optimize.CommonsChunkPlugin({
      name:'common',
      filename:'js/base.js'
     }),
     //把CSS单独打包到文件里
     new Ex("css/[name].css"),
     //HTML模板的处理
     new HtmlWebpackPlugin(getHtmlConfig('index')),
     new HtmlWebpackPlugin(getHtmlConfig('login')),
  ]
  };
  module.exports = config;