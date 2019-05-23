'use strict';

let sqlDb;

exports.authorsDbSetup = function(database) {
  sqlDb = database;
  console.log("Checking if authors table exists");
  return database.schema.hasTable("authors").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
      return database.schema.createTable("authors", table => {

        table.integer("authorId")
        .primary();
        table.text("name");
        table.text("life");
        table.text("award");
      });

    }
  });
};

exports.authorsAndBookDbSetup = function(database) {
  sqlDb = database;
  console.log("Checking if authorsAndBooks table exists");
  return database.schema.hasTable("authorsAndBooks").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
      return database.schema.createTable("authorsAndBooks", table => {

        table.integer("authorid")
        .notNullable()
        .references('authorid')
        .inTable('authors')
        .onDelete('CASCADE');
        table.integer("bookid")
        .notNullable()
        .references('id')
        .inTable('books')
        .onDelete('CASCADE');


        table.unique(['authorid', 'bookid']);
        table.primary(['authorid','bookid']);
      });

    }
  });
};


/**
 * Find authors by ID
 *
 * id Long ID of author that needs to be fetched
 * returns Author
 **/
exports.getAuthorById = function(id) {  
  return sqlDb("authors")
.where({authorid: id})
.then(data => {
  return data
});
}


/**
 * Retrieve the books of an author
 *
 * id Long ID of author of which to retrieve the books
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getBookByAuthor = function(id) {
  return sqlDb("authorsAndBooks")
  .where({authorid: id})
  .join('books', {'authorsAndBooks.bookid': 'books.id'})
  .then(data => {
    return data
  });
}


/**
 * Retrieve the events of an author
 *
 * id Long ID of author of which to retrieve the events
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getEventsByAuthor = function(id) {
  return sqlDb("eventsAndAuthor")
  .where({authorId: id})
  .then(data => {
    return data
  });
}


/**
 * Authors available in the inventory
 * List of author available in the inventory
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 5 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getauthor = function(offset,limit) {
  return sqlDb("authors")
  .limit(limit)
  .offset(offset)
  .then(data => {
    return data
  });
}

