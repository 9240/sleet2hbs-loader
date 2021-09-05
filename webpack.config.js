const path = require('path');
module.exports = {
  mode: process.env.NODE_ENV,
  target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',
  devtool:
    process.env.NODE_ENV === 'development' ? 'eval-cheap-source-map' : false,
  entry: path.resolve(__dirname, 'src/index.js'),
  resolve: {
    modules: ['node_modules'],
    fallback: {
      path: false,
      fs: false,
    },
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    clean: true,
    library: {
      name: 'sleet2hbs-loader',
      type: 'umd',
    },
  },
  resolveLoader: {
    modules: ['node_modules'],
  },
  externals: {
    sleet: 'sleet',
    'sleet-handlebars': 'sleet-handlebars',
  },
};
