module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  defineConstants: {},
  weapp: {},
  h5: {
    devServer: {
      https: false,
      port: 8080
    }
  }
}
