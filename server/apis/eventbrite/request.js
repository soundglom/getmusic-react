const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  console.log('Dev environment');
  require('dotenv').config();
}
const axios = require('axios');
const dataFormat = require('./data-format.js');
const EVENTBRITE_KEY = process.env.EVENTBRITE_KEY;
const SEARCH_URL = '?sort_by=date&location.address=1451+7th+St%2C+Oakland%2C+CA+94607&location.within=50mi&categories=103&start_date.keyword=this_month&token=';
const BASE_URL = 'https://www.eventbriteapi.com/v3/events/search/';
const EVENTBRITE_URL = `${BASE_URL}${SEARCH_URL}`;
const eventbrite = `${EVENTBRITE_URL}${EVENTBRITE_KEY}`;
// const EVENTBRITE_QUERY = {
//   root: 'https://www.eventbriteapi.com/v3/events/search/',
//   sort: '?sort_by=date',
//   city: '&venue.city='
//   state: '&venue.region=CA',
//   options: '&categories=103'
// https://www.eventbriteapi.com/v3/events/search/

const ebFetch = (arr) => {
  return (req, res, next) => {
    axios.get(eventbrite)
      .then((response) => {
        arr.length = 0;
        dataFormat(response.data.events, arr);
      })
      .catch((err) => {
        console.log(err);
      });
    next();
  };
};

module.exports = ebFetch;
