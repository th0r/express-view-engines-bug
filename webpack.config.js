var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  context: __dirname,
  entry: './entry',
  output: {
    path: __dirname + '/bundle',
    filename: 'bundle.js'
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};
