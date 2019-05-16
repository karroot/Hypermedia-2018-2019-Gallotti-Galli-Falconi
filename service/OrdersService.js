'use strict';


let sqlDb;
let sqlD1;


exports.ordersDbSetup = function(database) {
  sqlDb = database;
  console.log("Checking if authors table exists");
  return database.schema.hasTable("orders").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
      return database.schema.createTable("orders", table => {

        table.integer("id")
        .primary();
        table.integer("userId")
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
        table.date("data");
        table.float("total")
        .notNullable();
        
      });

    }
  });
};

exports.ordersdetailDbSetup = function(database) {
  sqlDb = database;
  console.log("Checking if authors table exists");
  return database.schema.hasTable("ordersdetail").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
      return database.schema.createTable("ordersdetail", table => {

        table.integer("orderId")
        .primary()
        .references('id')
        .inTable('orders')
        .onDelete('CASCADE');
        table.integer("quantity")
        .notNullable();
        table.integer("bookId")
        .references('id')
        .inTable('books')
        .onDelete('CASCADE');
        
        database.schema.alterTable('userId', function(t)  {
          t.unique(['bookId',integer])
        });
      });

    }

  });
};
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
  return sqlDb("orders")
  .limit(limit)
  .offset(offset)
  .then(data => {
    return data
  }),sqlDb1("ordersdetail")
  .limit(limit)
  .offset(offset)
  .then(data => {
    return data
  })
  ;
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
  return sqlDb("books")
  .where({id: id})
  .then(data => {
    return data
  });
}


/**
 * Find orders by ID
 *
 * id Long ID of order that needs to be fetched
 * returns Order
 **/
exports.getOrderById = function(id) {
  return sqlDb("orders")
  .where({id: ebookId})
  .then(data => {
    return data
  });
}


/**
 * Add a new order to the store
 *
 * body Order Order object that needs to be added to the database
 * no response value expected for this operation
 **/
exports.postOrder = function(body) {
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

