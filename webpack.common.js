const path = require('path');

module.exports = {
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
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
  },
};
