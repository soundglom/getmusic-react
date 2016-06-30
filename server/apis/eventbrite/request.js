const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  console.log('Dev environment')
  require('dotenv').config();  
}
const axios = require('axios');
const dataFormat = require('./data-format.js');
const EVENTBRITE_URL = 'https://www.eventbriteapi.com/v3/events/search/?sort_by=date&venue.city=San+Francisco&venue.region=CA&categories=103&expand=venue&token=';
const EVENTBRITE_KEY = process.env.EVENTBRITE;


// const EVENTBRITE_QUERY = {
//   root: 'https://www.eventbriteapi.com/v3/events/search/',
//   sort: '?sort_by=date',
//   city: '&venue.city='
//   state: '&venue.region=CA',
//   options: '&categories=103'
// };

const eventbrite = `${EVENTBRITE_URL}${EVENTBRITE_KEY}`;

const ebFetch = (arr) => {
  return (req, res, next) => {
    axios.get(eventbrite)
      .then((response) => {
        arr.length = 0;
        dataFormat(response.data.events, arr);
      });
    next();
  };
};

module.exports = ebFetch;
