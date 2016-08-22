var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude : /node_modules/,
        include: __dirname + '/src'
      },
      {
        test: /\.scss$/,
        loaders: ['style', "css", "sass", "postcss"]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000',
      }
    ]
  },
  devServer: {
    address: '127.0.0.1',
    port: 3000
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    new HtmlWebpackPlugin({
     template: __dirname + "/index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
