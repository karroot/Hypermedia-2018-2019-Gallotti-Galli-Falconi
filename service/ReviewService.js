'use strict';


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
exports.getAllReviews = function(userId,bookId,offset,limit) {
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
 * Retrieve the book a review was written for
 *
 * id Long ID of review of which to retrieve the book
 * returns Book
 **/
exports.getBookByReview = function(id) {
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
 * Find reviews by ID
 *
 * id Long ID of review that needs to be fetched
 * returns Review
 **/
exports.getReviewById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve the user a review was written by
 *
 * id Long ID of review of which to retrieve the user who wrote it
 * returns User
 **/
exports.getUserByReview = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "name" : "Davide",
  "address" : "Via Roma, Roma",
  "creditcard" : "xdfehc"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new review to the store
 *
 * body Review Review object that needs to be added to the database
 * returns Review
 **/
exports.pOSTReview = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing review
 *
 * body Review Review object that needs to be modified
 * returns Review
 **/
exports.pUTReview = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

