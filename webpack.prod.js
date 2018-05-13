const commonConfig = require('./webpack.common');
const path = require('path');

module.exports = Object.assign({}, commonConfig, {
  mode: 'production',
  entry: path.resolve(__dirname, 'components', 'index'),
  output: {
    filename: 'sv-component.js',
    path: path.resolve(__dirname, 'dist'),
  },
});
