var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'sourcemap',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', // WebpackDevServer host and port
    // 'webpack/hot/only-dev-server',
    './app/entry.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: path.join(__dirname, 'app'), loaders: ['react-hot', 'babel-loader'], exclude: /(node_modules|bower_components)/ },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
      // { test: /\.json$/, loaders: ['json-loader'] }

    ],
    preLoaders: [
      { test: /\jsx?$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ]
  },
  // For browser support
  postcss: function (webpack) {
    return [
      autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']})
    ];
  },
  // For use of relative paths in the browser
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'node_modules')]
  }

};
