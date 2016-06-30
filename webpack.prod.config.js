const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname,
  entry: './entry.jsx',
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/'

  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      foundation: 'foundation-sites/js/foundation.core'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ], 
  module: {
    loaders: [
      { test:  /\.jsx?$/, loader: 'babel' },
      { test: /node_modules\/(jws|jwa|qs)\/.*\.js$/, loaders: ["babel?optional[]=runtime&stage=1"] },
      { test: /jquery\.js$/, loader: 'expose?$' },
      { test: /jquery\.js$/, loader: 'expose?jQuery' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.scss$/, loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap'] },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?file-loader?limit=10000!img?progressive=true' }
    ]
  },
  postcss: function (webpack) {
    return [
      autoprefixer({ browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3', 'Firefox >= 20'], flexbox: 'no-2009' })
    ];
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'node_modules')]
  }   
}
