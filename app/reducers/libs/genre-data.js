const createGenres = (collection) => {
  let eventGenresObj = {};
  let eventGenresArr = [];

  collection.forEach((event) => {
    if (!eventGenresObj[event.genre]) {
      eventGenresObj[event.genre] = event.genre;
      eventGenresArr.push(event.genre);
    }
  });
  console.log('Genres: ', eventGenresArr);
  return eventGenresArr;
};

export default createGenres;
