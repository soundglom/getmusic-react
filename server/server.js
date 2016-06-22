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

const eData = require('../eb-events.json').events;
const eGenres = require('../eb-genres.json').subcategories;

const genreFormatter = (events, genres) => {
  const newEvents = events.map((event, index) => {
    let descr = event.description;
    
    if (event.subcategory_id === null) {
      event.subcategory_id = "3999";    
    }

    event.description.short = event.description.text.substring(0, 200);
    // if (event.description.text) {
    //   desct.short = descr.text.substring(0, 140)
    // } else {
    //   descr.short = '';
    // }

    genres.forEach(genre => {
      if (event.subcategory_id === genre.id) {
        event.genre = genre.name
      }
    });

    return formattedEvents.push(event);
  });

  return newEvents;
};

const eventFormat = (event) => {
  
}

// Reorganize into eventbrite middleware
axios.get(url)
  .then((res) => {
    res.data.events.forEach(event => {
      eventFormat(event);
      eventData.push(event);
    });

    // genreFormatter(res.data.events, eGenres, newCol);
  })
  .then(() => {
   genreFormatter(eventData, eGenres);
  });

//###############################

// console.log(eData[0]);







//###############################

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
