const path = require('path');

module.exports = {
  // Your other configuration settings...
  module: {
    rules: [
      // Other rules...
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          path.resolve(__dirname, 'node_modules/lightgallery'),
          // You can add more modules to exclude here
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // Optional: Disable source maps entirely
  devtool: false,
};
