const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contentHash].bundle.js',
    chunkFilename: '[id].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
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
