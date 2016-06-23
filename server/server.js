// require('dotenv').config();
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const apiUrl = require('./apis/eventbrite');
const EVENTBRITE = process.env.EVENTBRITE;
const publicPath = '../dist';
const env = process.env.NODE_ENV || 'development';
const development = false;
const port = process.env.PORT || 3000;

const app = express();
const url = apiUrl + EVENTBRITE;
const eventData = [];
const formattedEvents = [];
const genreFormat = require('./libs/genre-format.js');
// console.log(genreFormat);

// Reorganize into eventbrite middleware
axios.get(url)
  .then((res) => {
    res.data.events.forEach(event => {
      eventData.push(event);
    });
  })
  .then(() => {
    genreFormat(eventData, formattedEvents);
  });


app.use(express.static('dist/'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if (env === 'development') {
  console.log('We\'re in development mode.');
  const webpackMiddleware = require('./middleware/devserver');
  webpackMiddleware(app);
}

app.use('/api/data', (req, res, next) => {
  res.send(formattedEvents);
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
