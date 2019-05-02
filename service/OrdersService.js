'use strict';


/**
 * Finds orders
 * Retrieves orders from the system
 *
 * userId String The id of the user to retrieve the orders by
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getAllOrders = function(userId,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
  "id" : 0,
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "userId" : 6
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
  "id" : 0,
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "userId" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve the books of an order
 *
 * id Long ID of order of which to retrieve the books
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getBooksByOrder = function(id,offset,limit) {
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
 * Find orders by ID
 *
 * id Long ID of order that needs to be fetched
 * returns Order
 **/
exports.getOrderById = function(id) {
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
  "id" : 0,
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "userId" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new order to the store
 *
 * body Order Order object that needs to be added to the database
 * no response value expected for this operation
 **/
exports.pOSTOrder = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an existing order
 *
 * body Order Order object that needs to be added to the database
 * no response value expected for this operation
 **/
exports.updateOrder = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

