const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/Painel/Refrigeracao' : '/',
    configureWebpack: {
      optimization: {
        splitChunks: false,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              output: {
                comments: false,
              }
            }
          })
        ]
      },
      output: {
        filename: 'js/Refrigeracao.js'
      }
    },
    css: {
      extract: {
        filename: 'css/Refrigeracao.css',
      }
    },
    filenameHashing: false
  }