'use strict';


let sqlDb;
let sqlDb1;

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

exports.cartsdetailDbSetup = function(database) {
  sqlDb1 = database;
  console.log("Checking if carts table exists");
  return database.schema.hasTable("cartsdetail").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
      return database.schema.createTable("cartsdetail", table => {

        table.integer("userId")
        .primary()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
        table.float("total")
        .notNullable();
        table.integer("quantity");
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
 * Removes a cart item from the cart
 *
 * userId Long ID of the user whose cart needs to be modified
 * body CartItem Id of book and the quantity that needs to be removed from the cart
 * returns Cart
 **/
exports.deleteCartItem = function(userId,body) {
  return sqlDb("cartsdetail").where({"bookId":body.bookId,"userId":body.userId ,"total":body.total,"quantity":body.quantity })
  ,sqlDb("carts").where({"userId":body.userId ,"total":body.total, })
;
}




/**
 * Add a new cart item to the cart
 *
 * userId Long ID of the user whose cart needs to be modified
 * body CartItem Id of book and the quantity that needs to be added to the cart
 * returns Cart
 **/
exports.postCartItem = function(userId,body) {
  return sqlDb("cartsdetail").where({"bookId":body.bookId,"userId":body.userId ,"total":body.total,"quantity":body.quantity })
  ,sqlDb("carts").where({"userId":body.userId ,"total":body.total, })
;
}

