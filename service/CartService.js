'use strict';


let sqlDb;




exports.cartsdetailDbSetup = function(database) {
  sqlDb = database;
  console.log("Checking if carts table exists");
  return database.schema.hasTable("cartsdetail").then(exists => {
    if (!exists) {
      console.log("It doesn't so we create it");
      return database.schema.createTable("cartsdetail", table => {

        table.integer("userId")
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
        table.float("value")
        .notNullable();
        table.integer("quantity");
        table.integer("bookId")
        .notNullable()
        .references('id')
        .inTable('books')
        .onDelete('CASCADE');

        table.unique(['userId', 'bookId']);
        table.primary(['userId','bookId']);

      });

    }

  });
};


/**
 * Update the cart of a given user
 *
 * userId Long ID of the user whose cart needs to be modified
 * body CartItem Id of book and the quantity that needs to be delete from cart
 * returns Cart
 **/
exports.deleteCartDetailByUserId = function(userId,body) {
  
  // body.quantity) sempre quantità corrente

    console.log("quantity : "+body.quantity);
    var quan=body.quantity -1;
    
    if (body.quantity==1){
     return sqlDb("cartsdetail")
     .where({"userId":userId ,"bookId":body.bookId,"quantity":body.quantity}).del();
    }
    else{
     return sqlDb("cartsdetail")
     .where({"userId":userId ,"bookId":body.bookId,"quantity":body.quantity}).update({ quantity: quan });
    }

  
 
}


/**
 * Add a new cart item to the cart
 *
 * userId Long ID of the user whose cart needs to be modified
 * body CartItem Id of book and the quantity that needs to be added to the cart
 * returns Cart
 **/
exports.putCartDetailByUserId = function(userId,body) {
  return sqlDb("cartsdetail")
  .insert({"userId":userId ,"bookId":body.bookId,"quantity":body.quantity});
}




