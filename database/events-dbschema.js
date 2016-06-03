const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/getmusiclive';

const client = new pg.Client(connectionString);

client.connect((err) => {
  if (err) throw err;

  // Create events table
  client.query('DROP TABLE IF EXISTS events');
  client.query(
    `CREATE TABLE events (
      id serial PRIMARY KEY,
      event_id INTEGER NULL,
      event_title VARCHAR(20) NULL DEFAULT NULL,
      event_genre INTEGER NULL DEFAULT NULL,
      event_description TEXT NULL DEFAULT NULL,
      event_location INTEGER NULL DEFAULT NULL
    );`
  );

  // Create the genres table
  client.query(`DROP TABLE IF EXISTS event_genres;`);
  client.query(
    `CREATE TABLE event_genres (
      id serial PRIMARY KEY,
      event_genres VARCHAR(20) NULL DEFAULT NULL
    );`
  );

  // Create the locations table
  client.query(`DROP TABLE IF EXISTS event_locations;`);
  client.query(
    `CREATE TABLE event_locations (
      id serial PRIMARY KEY,
      event_location VARCHAR(20) NULL DEFAULT NULL
    );`
  );

  // Foreign Keys
  client.query(
    `ALTER TABLE events 
    ADD FOREIGN KEY (event_genre) 
    REFERENCES event_genres (id);`
  );

  client.query(
    `ALTER TABLE events 
    ADD FOREIGN KEY (event_location) 
    REFERENCES event_locations (id);`
  );

  client.on('end', (err) => {
    if (err) throw err;

    console.log('connected to pg database');    
  });

});
