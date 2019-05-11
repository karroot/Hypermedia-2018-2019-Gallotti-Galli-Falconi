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

        table.text("author1")
        .notNullable()
        .references('name')
        .inTable('authors')
        .onDelete('CASCADE');

        table.text("author2")
        .references('name')
        .inTable('authors')
        .onDelete('CASCADE');
        
        table.text("author3")
        .references('name')
        .inTable('authors')
        .onDelete('CASCADE');
        
        table.text("author4")
        .references('name')
        .inTable('authors')
        .onDelete('CASCADE');

      });



    }
    
  });
};
/**
 * Retrieve the author of an event
 *
 * id Long ID of event of which to retrieve the author
 * returns Event
 **/
exports.getAuthorByEvents = function(id) {
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


/**
 * Find events by ID
 *
 * id Long ID of event that needs to be fetched
 * returns Event
 **/
exports.getEventById = function(id) {
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


/**
 * Finds events
 * Retrieves events from the system
 *
 * bookId Integer The id of the book of which you want to retrieve the events (optional)
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getEvents = function(bookId,offset,limit) {
  return sqlDb("events")
  .limit(limit)
  .offset(offset)
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
  return new Promise(function(resolve, reject) {
    resolve();
  });
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

