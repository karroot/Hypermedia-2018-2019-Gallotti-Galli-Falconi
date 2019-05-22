'use strict';

var bcrypt = require('bcrypt');
let saltRounds = 10;
let sqlDb;

exports.usersDbSetup = function(database) {
  sqlDb = database;
  console.log("Checking if users table exists");
  return database.schema.hasTable("users").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
      return database.schema.createTable("users", table => {

        table.integer("id")
        .primary();
        table.text("username")
        .notNullable();
        table.text("address");
        table.text("password")
        .notNullable();
        table.text("creditCard");
      });

    }
  });
};
/**
 * retrieves the cart of an user
 *
 * id Long ID of the user to retrieve the cart from
 * returns Cart
 **/
exports.getCartByUser = function(id) {
  return sqlDb("carts")
  .where({userId: id})
  .then(data => {
    return data
  });
}

/**
 * retrieves the cart of an user
 *
 * id Long ID of the user to retrieve the cart from
 * returns Cart
 **/
exports.getCartDetailByUser = function(id) {
  return sqlDb("cartsdetail")
  .where({userId: id})
  .then(data => {
    return data
  });
}


/**
 * retrieves the orders of an user
 *
 * id Long ID of the user to retrieve the orders from
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.getOrdersByUser = function(id,offset,limit) {

  exports.getCartByUser = function(id) {
    return sqlDb("orders")
    .where({userId: id})
    .then(data => {
      return data
    });
  }
}


/**
 * Logs out current logged in user session
 * 
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Login
 * Login with a form
 *
 * username String 
 * password String 
 * no response value expected for this operation
 **/
exports.postuserLogin = function(username,password) {
  //per ora facciamo così per sapere le password da salvare , poi lo faremo direttamente nel register
  let hash = bcrypt.hashSync(password,10);
console.log("pass :");
console.log(hash);
  return sqlDb("users").where({"address":username});
}

exports.getUserById = function(id) {
  
  return sqlDb("users").where({"id":id});
}
/**
 * Register
 * Register into the store
 *
 * body User 
 * no response value expected for this operation
 **/
exports.postuserRegister = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

