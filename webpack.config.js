const path = require("path")
const webpackDevServer = require('webpack-dev-server')

module.exports = {
  mode: "development",
  entry: [
    path.join(__dirname, './src/entry.js'),
    path.join(__dirname, './src/entry1.js'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host: '0.0.0.0',
    // compress: true,
    port: 8080
  }
}
