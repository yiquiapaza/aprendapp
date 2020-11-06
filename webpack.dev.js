const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: './dist',
    port: 9000,
    historyApiFallback: true,
    hot: true,
    watchContentBase: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      ignoreOrder: false
    })
  ]
});
