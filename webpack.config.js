const path = require('path')

const outputPath = path.resolve(__dirname, 'docs')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules:[
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
   type: 'javascript/auto',
   test: /\.json$/,
   use: [ { loader: 'json-loader' } ]
}
    ]
  }
}
