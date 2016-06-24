const fetch = require('../middleware/api-fetch');

// const EVENTBRITE_QUERY = {
//   root: 'https://www.eventbriteapi.com/v3/events/search/',
//   sort: '?sort_by=date',
//   city: '&venue.city='
//   state: '&venue.region=CA',
//   options: '&categories=103'
// };

const EVENTBRITE_URL = 'https://www.eventbriteapi.com/v3/events/search/?sort_by=date&venue.city=Oakland&venue.city=Berkeley&venue.city=SanFrancisco&venue.region=CA&categories=103&expand=venue&token=';
const EVENTBRITE_KEY = process.env.EVENTBRITE;
const url = `${EVENTBRITE_URL}${EVENTBRITE_KEY}`;

module.exports = { 
  fetch: fetch(url),
  BASE_URL: EVENTBRITE_URL
};
