'use strict';


/**
 * Retrieve the author of a book
 *
 * ebookId Long ID of book of which to retrieve the author
 * returns Author
 **/
exports.getAuthorByeBook = function(ebookId) {
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
 * retrieves the events of a book
 *
 * ebookId Long ID of the book to retrieve the events of
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getEventsByeBook = function(ebookId,offset,limit) {
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
 * ebookId Long ID of the book to retrieve the reviews of
 * returns List
 **/
exports.getReviewsByeBook = function(ebookId) {
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
 * Find ebook by ID
 * Returns a ebook
 *
 * ebookId Long ID of ebook to return
 * returns Book
 **/
exports.geteBookById = function(ebookId) {
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
 * Books available in the inventory
 * List of ebooks available in the inventory
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 5 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getebooks = function(offset,limit) {
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
