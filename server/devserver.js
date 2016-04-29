var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config');

var development = process.env.NODE_ENV !== 'production';
var port = development ? 3000 : process.env.PORT;

function devServer() {
  var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true
  });

  server.listen(port, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost: ', port);
  }); 
}

module.exports = devServer;