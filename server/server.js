// require('dotenv').config();
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const apiUrl = require('./apis/eventbrite');
const EVENTBRITE = process.env.EVENTBRITE;
const publicPath = '../dist';
// const development = process.env.NODE_ENV !== 'production';
const development = false;
const port = process.env.PORT || 3000;

const app = express();
const url = apiUrl + EVENTBRITE;
const eventData = [];

// Reorganize into eventbrite middleware
axios.get(url)
  .then((res) => {
    res.data.events.forEach(event => {
      eventData.push(event);
    });
  });

app.use(express.static('dist/'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if (development) {
  console.log('We\'re in development mode.');
  const webpackMiddleware = require('./middleware/devserver');
  webpackMiddleware(app);
}

app.use('/api/data', (req, res, next) => {
  res.send(eventData);
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
