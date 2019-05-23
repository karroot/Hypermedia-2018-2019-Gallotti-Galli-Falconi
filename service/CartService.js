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
 * Add a new cart item to the cart
 *
 * userId Long ID of the user whose cart needs to be modified
 * body CartItem Id of book and the quantity that needs to be added to the cart
 * returns Cart
 **/
exports.putCartDetailByUserId = function(userId,body) {
  return sqlDb("cartsdetail")
  .insert({"userId":userId ,"bookId":body.bookId,"total":body.total,"quantity":body.quantity});
}




