'use strict';

let sqlDb;

exports.ebooksDbSetup = function(database) {
  sqlDb = database;
  console.log("Checking if books table exists");
  return database.schema.hasTable("books").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
      return database.schema.createTable("books", table => {
        table.integer("id")
        .primary();
        table.float("value");
        table.text("intro");
        table.text("title");
        table.text("factSheet");
        table.text("genre");
        table.text("theme");
        table.enum("status", ["available", "out of stock"]);
        table.text("currency");

      });
    }
  });
};



/**
 * retrieves the events of a book
 *
 * ebookId Long ID of the book to retrieve the events of
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getEventsByebook = function(ebookId,offset,limit) {
  return sqlDb("events")
  .where({bookId: ebookId})
  .then(data => {
    return data
  });
}


/**
 * retrieves the reviews of a book
 *
 * ebookId Long ID of the book to retrieve the reviews of
 * returns List
 **/
exports.getReviewsByebook = function(ebookId) {
  return sqlDb("reviews")
  .where({bookId: ebookId})
  .then(data => {
    return data
  });
}



/**
 * Find ebook by ID
 * Returns a ebook
 *
 * ebookId Long ID of ebook to return
 * returns Book
 **/
exports.getebookById = function(ebookId) {
  return sqlDb("books")
  .where({id: ebookId})
  .then(data => {
    return data
  });
}
exports.getAuthorByebook = function(id,offset,limit) {
  return sqlDb("authorsAndBooks")
  .where({id: ebookId})
  .join('authors', {'authorsAndBooks.authorid': 'authors.authorid'})
  .then(data => {
    return data
  });
}

/**
 * Books available in the inventory
 * List of ebooks available in the inventory
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 5 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getebooks = function(offset,limit) {

  
  return sqlDb("books")
  .limit(limit)
  .offset(offset)
  .where({ebook: 'true'})
  .then(data => {
    return data
  });
}

