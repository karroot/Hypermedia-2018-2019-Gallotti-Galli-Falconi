'use strict';


let sqlDb;

exports.cartsDbSetup = function(database) {
  sqlDb = database;
  console.log("Checking if carts table exists");
  return database.schema.hasTable("carts").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
      return database.schema.createTable("carts", table => {

        table.integer("userId")
        .primary()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
        table.float("total")
        .notNullable();
        
      });

    }

  });
};
/**
 * Removes a cart item from the cart
 *
 * userId Long ID of the user whose cart needs to be modified
 * body CartItem Id of book and the quantity that needs to be removed from the cart
 * returns Cart
 **/
exports.deleteCartItem = function(userId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : {
    "currency" : "eur",
    "value" : 8.008281904610117E13
  },
  "books" : [ {
    "id" : 0,
    "title" : "1984",
    "author" : "Orwell George",
    "price" : {
      "value" : 12,
      "currency" : "eur"
    }
  }, {
    "id" : 1,
    "title" : "Guida Galattica per autostoppisti",
    "author" : "Douglas Adams",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    }
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
 * Finds a cart
 * Retrieves a cart from the system
 *
 * userId String The id of the user of the cart to retrieve
 * returns Cart
 **/
exports.getSingleCart = function(userId) {
  return sqlDb("carts")
  .limit(limit)
  .offset(offset)
  .then(data => {
    return data
  });
}


/**
 * Add a new cart item to the cart
 *
 * userId Long ID of the user whose cart needs to be modified
 * body CartItem Id of book and the quantity that needs to be added to the cart
 * returns Cart
 **/
exports.postCartItem = function(userId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "total" : {
    "currency" : "eur",
    "value" : 8.008281904610117E13
  },
  "books" : [ {
    "id" : 0,
    "title" : "1984",
    "author" : "Orwell George",
    "price" : {
      "value" : 12,
      "currency" : "eur"
    }
  }, {
    "id" : 1,
    "title" : "Guida Galattica per autostoppisti",
    "author" : "Douglas Adams",
    "price" : {
      "value" : 10,
      "currency" : "eur"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

