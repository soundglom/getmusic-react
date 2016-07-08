// require('dotenv').config();
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const ebStuff = require('./apis/eventbrite/request');
const ebFetch = ebStuff.ebFetch;
const repeatRequest = ebStuff.repeatRequest;
const publicPath = '../dist';
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
console.log(repeatRequest);
// const env = process.env.NODE_ENV || 'development';

const formattedEvents = [];

app.use(express.static('dist/'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(ebFetch(formattedEvents));
// app.use(repeatRequest());

if (env === 'development') {
  console.log('Environment: ', env);
  require('./middleware/devserver')(app);
}

app.use('/api/data', (req, res, next) => {
  res.send(formattedEvents);
});

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
