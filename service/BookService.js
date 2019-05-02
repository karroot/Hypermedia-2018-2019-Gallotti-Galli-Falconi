"use strict";

let sqlDb;

exports.booksDbSetup = function(database) {
  sqlDb = database;
  console.log("Checking if books table exists");
  return database.schema.hasTable("books").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
      return database.schema.createTable("books", table => {
        table.increments();
        table.text("title");
        table.text("author");
        table.float("value");
        table.text("currency");
        table.enum("status", ["available", "out of stock"]);
      });
    }
  });
};

/**
 * Retrieve the author of a book
 *
 * bookId Long ID of book of which to retrieve the author
 * returns Author
 **/


exports.getAuthorByBook = function(bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "title" : "Brave new world",
  "author" : "Aldous Huxley",
  "price" : {
    "value" : 10,
    "currency" : "eur"
  },
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * retrieves the events of a book
 *
 * bookId Long ID of the book to retrieve the events of
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getEventsByBook = function(bookId,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * retrieves the reviews of a book
 *
 * bookId Long ID of the book to retrieve the reviews of
 * returns List
 **/
exports.getReviewsByBook = function(bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "user" : {
    "name" : "Davide"
  },
  "book" : {
    "id" : 0,
    "title" : "1984",
    "author" : "Orwell George",
    "price" : {
      "value" : 12,
      "currency" : "eur"
    }
  },
  "stars" : 2
}, {
  "user" : {
    "name" : "Davide"
  },
  "book" : {
    "id" : 0,
    "title" : "1984",
    "author" : "Orwell George",
    "price" : {
      "value" : 12,
      "currency" : "eur"
    }
  },
  "stars" : 2
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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

