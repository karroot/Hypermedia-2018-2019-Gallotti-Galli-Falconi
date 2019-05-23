'use strict';

let sqlDb;

exports.eventsDbSetup = function(database) {
  sqlDb = database;
  console.log("Checking if events table exists");
  return database.schema.hasTable("events").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
      return database.schema.createTable("events", table => {
        table.integer("id")
        .primary();
        table.date("date")

        table.text("place");
        table.text("title");
        table.text("overview");
        table.integer("bookId")
        .notNullable()
        .references('id')
        .inTable('books')
        .onDelete('CASCADE');


       


      });



    }
    
  });
};



/**
 * Find events by ID
 *
 * id Long ID of event that needs to be fetched
 * returns Event
 **/
exports.getEventById = function(id) {
  return sqlDb("events")
  .where({id: id})
  .then(data => {
    return data
  });
}


/**
 * Find events by ID
 *
 * id Long ID of event that needs to be fetched
 * returns Event
 **/
exports.getEvents = function() {
  return sqlDb("events")
  .then(data => {
    return data
  });
}




