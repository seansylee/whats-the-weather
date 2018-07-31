var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var config = {
  entry:  "./app/index.js",
     
  output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'index_bundle.js',
     publicPath: '/'
  },
  module: {
    rules: [
      //babel transforms code, 
      // example: class is a ES6 syntax, older browsers will not know this,
      // So babel will transform. even for JSX
      {test: /\.(js)$/, use:'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  devServer: {
    historyApiFallback: true
   },
  plugins: [
   new HtmlWebpackPlugin({
    template: 'app/index.html'
  })
],
  //mode: "development"
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}

module.exports = config;