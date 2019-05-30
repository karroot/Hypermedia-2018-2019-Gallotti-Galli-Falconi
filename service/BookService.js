"use strict";

let sqlDb;
let sqlDb1;
exports.booksDbSetup = function(database) {
  sqlDb = database;
  console.log("Checking if books table exists");
  return database.schema.hasTable("books").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
      return database.schema.createTable("books", table => {
        table.integer("id")
        .increments()
        .primary();
        table.float("value");
        table.text("intro");
        table.text("title");
        table.text("factSheet");
        table.text("genre");
        table.text("theme");
        table.enum("status", ["available", "out of stock"]);
        table.text("ebook");
        table.text("currency");
        table.integer("sold");
      });
    }
  });
};
exports.similarbooksDbSetup = function(database) {
  sqlDb1 = database;
  console.log("Checking if books table exists");
  return database.schema.hasTable("similarbooks").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
      return database.schema.createTable("similarbooks", table => {
        table.integer("bookid1")
        .notNullable()
        .references('id')
        .inTable('books')
        .onDelete('CASCADE');
        table.integer("bookid2")
        .notNullable();

        table.unique(['bookid2', 'bookid1']);
        table.primary(['bookid2','bookid1']);

      });
    }
  });
};




/**
 * retrieves the events of a book
 *
 * bookId Long ID of the book to retrieve the events of
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getEventsByBook = function(bookId,offset,limit) {
  return sqlDb1("events")
  .where({bookId: bookId})
  .then(data => {
    return data
  });
}

exports.getAuthorByBook = function(id,offset,limit) {
  return sqlDb("authorsAndBooks")
  .where({bookid: id})
  .join('authors', {'authorsAndBooks.authorid': 'authors.authorid'})
  .then(data => {
    return data
  });
}
/**
 * retrieves the reviews of a book
 *
 * bookId Long ID of the book to retrieve the reviews of
 * returns List
 **/
exports.getReviewsByBook = function(bookId) {
  return sqlDb1("reviews")
  .select('reviews.bookId','reviews.title','reviews.stars','reviews.text')
  .where({bookId: bookId})
   .then(data => {
    return data
  });
}


/**
 * Finds Books by Similarity
 * Retrieves the books similar to the book having the specified id
 *
 * bookId Long ID of the book to find similarities with
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getSimilarBook = function(bookId,offset,limit) {
  return sqlDb1("similarbooks")
  .innerJoin('books', 'similarbooks.bookid2', 'books.id')
  .limit(limit)
  .offset(offset)
  .where({bookid1: bookId})
  .then(data => {
    return data
    });
}


/**
 * Books available in the inventory
 * List of books available in the inventory
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 5 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getbook = function(offset,limit) {
  
    return sqlDb("books")
    .limit(limit)
    .offset(offset)
    .then(data => {
      return data.map(e => {
        e.price = { value: e.value, currency: e.currency };
        return e;
      });
    });
  
}
/**
 * Find book by ID
 * Returns a book
 *
 * bookId Long ID of book to return
 * returns Book
 **/
exports.getBookById = function(bookId) {
  return sqlDb("books")
  .where({id: bookId})
  .then(data => {
    return data.map(e => {
      e.price = { value: e.value, currency: e.currency };
      return e;
    })});
}
//get  theme by book e get genere by book