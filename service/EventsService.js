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

        table.text("authorname1")
        .notNullable()
        .references('name')
        .inTable('authors')
        .onDelete('CASCADE');

        table.text("authorname2")
        .references('name')
        .inTable('authors')
        .onDelete('CASCADE');
        
        table.text("authorname3")
        .references('name')
        .inTable('authors')
        .onDelete('CASCADE');
        
        table.text("authorname4")
        .references('name')
        .inTable('authors')
        .onDelete('CASCADE');

        table.integer("authorid1")
        .notNullable()
        .references('authorid')
        .inTable('authors')
        .onDelete('CASCADE');

        table.integer("authorid2")
        .notNullable()
        .references('authorid')
        .inTable('authors')
        .onDelete('CASCADE');

        table.integer("authorid3")
        .notNullable()
        .references('authorid')
        .inTable('authors')
        .onDelete('CASCADE');

        table.integer("authorid4")
        .notNullable()
        .references('authorid')
        .inTable('authors')
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
 * Add a new event to the store
 *
 * body Event Event object that needs to be added to the database
 * no response value expected for this operation
 **/
exports.postEvent = function(body) {

}


/**
 * Update an existing event
 *
 * body Event Event object that needs to be added to the database
 * returns Event
 **/
exports.putEvent = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "",
  "overview" : "",
  "books" : [ {
    "id" : 0,
    "title" : "Brave new world",
    "author" : "Aldous Huxley",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    },
    "status" : "available"
  }, {
    "id" : 0,
    "title" : "Brave new world",
    "author" : "Aldous Huxley",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    },
    "status" : "available"
  } ],
  "award" : "",
  "advertisingPoster" : "",
  "id" : 0,
  "place" : "",
  "authors" : [ {
    "books" : [ {
      "id" : 0,
      "title" : "Brave new world",
      "author" : "Aldous Huxley",
      "price" : {
        "value" : 10,
        "currency" : "eur"
      },
      "status" : "available"
    }, {
      "id" : 0,
      "title" : "Brave new world",
      "author" : "Aldous Huxley",
      "price" : {
        "value" : 10,
        "currency" : "eur"
      },
      "status" : "available"
    } ],
    "award" : "",
    "name" : "",
    "photo" : "",
    "id" : 0,
    "life" : ""
  }, {
    "books" : [ {
      "id" : 0,
      "title" : "Brave new world",
      "author" : "Aldous Huxley",
      "price" : {
        "value" : 10,
        "currency" : "eur"
      },
      "status" : "available"
    }, {
      "id" : 0,
      "title" : "Brave new world",
      "author" : "Aldous Huxley",
      "price" : {
        "value" : 10,
        "currency" : "eur"
      },
      "status" : "available"
    } ],
    "award" : "",
    "name" : "",
    "photo" : "",
    "id" : 0,
    "life" : ""
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

