const path = require('path');

module.exports = {
  entry: ['./src/sass/main.scss', './src/js/app.js'],
  watch: true,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              outputPath: '../css/'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static/js')
  }
};
