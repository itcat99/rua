const commonConfig = require('./webpack.common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = Object.assign({}, commonConfig, {
  mode: 'production',
  entry: path.resolve(__dirname, 'components', 'index'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        include: [path.resolve(__dirname, 'components')],
        loader: 'babel-loader',
      },
      {
        test: /\.scss?$/,
        include: [path.resolve(__dirname, 'components')],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    filename: 'sv-component.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
