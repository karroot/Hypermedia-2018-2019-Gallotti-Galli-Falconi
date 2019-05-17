'use strict';
let sqlDb;

exports.themeDbSetup = function(database) {
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
        table.text("ebook");
        table.integer("authorid1");
        table.integer("authorid2");
        table.integer("authorid3");
        table.integer("authorid4");
        table.text("currency");

      });
    }
  });
};


/**
 * Find bookId by theme
 * Returns a bookId
 *
 * bookId Long ID of book to return
 * returns Book
 **/
exports.getBookByTheme = function(themeid,offset,limit) {
  return sqlDb("books")
  .where({theme: themeid})

  .then(data => {
    return data
  });
}


/**
 * Thems available in the inventory
 * List of themes available in the inventory
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 5 and cannot exceed 500. (optional)
 * returns List
 **/
exports.gettheme = function(offset,limit) {
  return sqlDb("books")
  .limit(limit)
  .offset(offset)
  .select('theme')
  .then(data => {
    return data
  });
}

