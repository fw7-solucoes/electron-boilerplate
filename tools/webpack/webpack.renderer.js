const { resolve } = require('path')
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    alias: {
      '~': resolve(__dirname, '..', '..', 'src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  },
};
