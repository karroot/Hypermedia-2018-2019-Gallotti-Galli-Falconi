'use strict';

let sqlDb;

exports.reviewsDbSetup = function(database) {
  sqlDb = database;
  console.log("Checking if review table exists");
  return database.schema.hasTable("reviews").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
      return database.schema.createTable("reviews", table => {


        table.integer("UserId")
        .primary()
        .notNullable();

        table.integer("bookId")
        .notNullable()
        .references('id')
        .inTable('books')
        .onDelete('CASCADE');

        table.integer("stars");
        table.text("title");
        table.text("text");

      });

    }
  });
};

/**
 * Finds reviews
 * Retrieves reviews from the system
 *
 * userId String The id of the user to retrieve the reviews by (optional)
 * bookId String The id of the book to retrieve the reviews of (optional)
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getAllReviews = function() {
 return sqlDb("reviews")
  .then(data => {
    return data
  });
}



/**
 * Find reviews by ID
 *
 * id Long ID of review that needs to be fetched
 * returns Review
 **/
exports.getReviewById = function(id) {
  return sqlDb("reviews")
  .where({UserId: id})
  .then(data => {
    return data
  });
}


