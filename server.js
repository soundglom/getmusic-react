// require('dotenv').config();
var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');
var axios = require('axios');
var apiUrl = require('./server/apis');
var EVENTBRITE = process.env.EVENTBRITE;
var publicPath = path.resolve(__dirname, 'dist/');
var development = process.env.NODE_ENV !== 'production';
var port = development ? 3000 : process.env.PORT;

var app = express();
var url = apiUrl + EVENTBRITE;
var eventData = [];

// var testEvents = require('./database/insert-events.js');

// testEvents();

axios.get(url)
  .then((res) => {
    res.data.events.forEach(event => {
      eventData.push(event);
    });
  })
  .then(() => {
    query('INSERT INTO newEvents(id, data) values($1,$2)', [1, eventData]);

    query.on('end', function() { 
      client.end(); 
      console.log('Done!');
    });
  })

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


if (development) {
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var config = require('./webpack.config');
  var compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    quiet: true,
    hot: true,
    filename: 'bundle.js',
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    },
    historyApiFallback: true
  }));

  app.use(webpackHotMiddleware(compiler, {
    //log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
}

app.use('/api/data', (req, res, next) => {
  res.send(eventData);
});

app.get('/', function (req, res, next) {
  res.sendFile('/index.html', { root: publicPath });
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
