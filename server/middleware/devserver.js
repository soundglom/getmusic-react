const webpack = require('webpack');
const config = require('./../../webpack.config.js');
// var WebpackDevServer = require('webpack-dev-server');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(config);

// Development 
// const env = process.env.NODE_ENV || 'development';
// const development = false;

// // Eventbrite (turn this into a single require) 
// const dataFormat = require('../libs/data-format.js');
// const apiUrl = require('../apis/eventbrite').BASE_URL;
// const EVENTBRITE = process.env.EVENTBRITE;
// const url = apiUrl + EVENTBRITE;
// const eventData = [];
// const formattedEvents = [];

// Reorganize into eventbrite middleware
// const newFetch = (req, res, next) => {
//   axios.get(url)
//     .then((res) => {
//       formattedEvents.length = 0;
//       dataFormat(res.data.events, formattedEvents);
//     });
//   next();
// };

// //////////////////////////////////////////////////

// const server = new WebpackDevServer(compiler, {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true
// });

// server.use(newFetch);

// sever.use('/api/data', (req, res, next) => {
//   res.send(formattedEvents);
// });

// server.get('*', (req, res) => {
//   res.redirect('/');
// });

// server.listen(8080, 'localhost', function (err, result) {
//   if (err) {
//     return console.log(err);
//   }

//   console.log('Listening at http://localhost:8080/');
// });

// // module.exports = webpackServer;

//////////////////////////////////////////////////
const webpackMiddleware = (server) => {
  server.use(devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    quiet: true,
    noInfo: true,    
    historyApiFallback: true
  }));

  server.use(hotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
};

module.exports = webpackMiddleware;
