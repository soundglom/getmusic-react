// require('dotenv').config();
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const publicPath = '../dist';
const port = process.env.PORT || 3000;

// Development 
const env = process.env.NODE_ENV || 'development';
const development = false;

// Eventbrite (turn this into a single require) 
const dataFormat = require('./libs/data-format.js');
const apiUrl = require('./apis/eventbrite').BASE_URL;
const EVENTBRITE = process.env.EVENTBRITE;
const url = apiUrl + EVENTBRITE;
const eventData = [];
const formattedEvents = [];

// Reorganize into eventbrite middleware
const newFetch = (req, res, next) => {
  axios.get(url)
    .then((res) => {
      formattedEvents.length = 0;
      dataFormat(res.data.events, formattedEvents);
    });
  next();
};

app.use(express.static('dist/'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(newFetch);

if (env === 'development') {
  require('./middleware/devserver')(app);
  // webpackMiddleware(app);
  console.log('We\'re in development mode.');
}

app.use('/api/data', (req, res, next) => {
  res.send(formattedEvents);
});

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
