
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path                 = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    path       : path.resolve(__dirname, 'dist'),
    filename   : 'bundle.js',
    publicPath : '/'
  },
  module: {
    rules: [
      {
        test : /\.css$/,
        use  : [{ loader: MiniCssExtractPlugin.loader }, 'css-loader']
      },
      {
        test    : /\.(js|jsx)$/,
        exclude : /node_modules/,
        use     : ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions : ['.css', '.js', '.jsx'],
    modules    : ['node_modules', 'public', 'src']
  },
  plugins: [
    new MiniCssExtractPlugin('styles.css'),
    new HtmlWebpackPlugin({
      title    : 'Given a ‘listing’ endpoint to the reddit API display a list of reddit listings with the thumbnail and title',
      template : 'public/html/index.html',
      favicon  : 'public/icon/favicon.ico'
    })
  ]
};
