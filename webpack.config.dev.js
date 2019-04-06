const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: 'vue-style-loader'},
          {loader: 'css-loader'},
          {loader: 'postcss-loader'},
          {loader: 'sass-loader'}
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'template'),
    watchContentBase: true,
    hot: true,
    inline: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
    }),
  ],
});
