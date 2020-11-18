const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    home: './src/app.js',
    clipboard: './src/clipboard.js',
  },
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts/'
  },
  devtool: 'cheap-source-map',
  // devServer: {
  //   contentBase: './'
  // }
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { useBuiltIns: 'usage', corejs: { version: 3 } }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
  ]
};