const path = require('path');

module.exports = {
  
  module: {
    rules: [
     
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          path.resolve(__dirname, 'node_modules/lightgallery'),
         
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  
  devtool: false,
};
