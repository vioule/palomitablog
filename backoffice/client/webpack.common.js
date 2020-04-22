const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['./index.jsx'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
