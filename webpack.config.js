var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
  // entry:[
  //   'webpack/hot/dev-server', 
  //   'webpack-dev-server/client?http://localhost:9999',
  //   path.resolve(__dirname, './app/index.js'),
  //   path.resolve(__dirname, './app/third/flexible.js')
  // ],
  entry: {
    main : './src/index.js'
  },
  output:{
    path:path.resolve(__dirname,'./public'),
    filename:'index.js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ["transform-decorators-legacy"] //使用decorator
        }
      }, 
      {test: /\.(png|jpg)$/, loader: 'url?limit=40000'},
      {test:/\.less$/,loader:'style!css!less'}
      // { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader",'css?sourceMap') }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new OpenBrowserPlugin({ url: 'http://localhost:9999' }),
  ]

}
