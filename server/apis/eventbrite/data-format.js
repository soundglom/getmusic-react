const R = require('ramda');

// Local genres file
const genreData = require('../../../eb-genres.json').subcategories;

// Create a short description
const descrFormat = (descr) => {
  return descr.substring(0, 300);
};

// Set null genre codes to 'Other' code
const fixGenreCode = (code) => {
  if (code === null) {
    return "3999";
  }
  return code;
};

// Create a map for the genre code 
const genreMap = (arr) => {
  let obj = {};
  
  arr.forEach(genre => {
    obj[genre.id] = genre.name;  
  });
  return obj;
};

// Translate genre codes
const createGenre = (code, obj) => {
  return obj[code];
};

// Format and create new event object
const formatEvents = (event) => {
  return {
    id: event.id,
    name: {
      text: event.name.text.substring(0, 25)
    },
    description: {
      text: event.description.text,
      short: descrFormat(event.description.text)
    },
    genre: createGenre(fixGenreCode(event.subcategory_id), genreMap(genreData)),
    start: event.start,
    end: event.end,
    venue: event.venue,
    logo: event.logo,
    url: event.url,
    performer: 'Artist'
  };
};

// Format Eventbrite API data
const genreFormat = (events, collection) => {
  const newEvents = events.forEach((event, index) => {
    collection.push(formatEvents(event));   
  });
};

module.exports = genreFormat;
