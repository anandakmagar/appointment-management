const path = require('path');

module.exports = {
  entry: './index.js',  // Your entry point, adjust if necessary
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // Process CSS files
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Process image files
        type: 'asset/resource',
      },
      {
        test: /\.html$/,  // Process HTML files
        loader: 'html-loader'
      },
      {
        test: /\.js$/,  // Transpile JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
