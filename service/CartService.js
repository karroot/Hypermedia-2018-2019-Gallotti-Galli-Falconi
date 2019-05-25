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


exports.putCartDetailByUserId = function(userId,body) {
  
  function isInDb (sqlDb,book){
  return sqlDb("cartsdetail").count("* as count").where({bookId:book}).then(data =>{
    

  
    return (data[0].count > 0) ? true : false;
  });
  };
  
  function updateBook (sqlDb,userId,body){
    return sqlDb("cartsdetail").where({"userId":userId, "bookId": body.bookId}).then(data =>{
      var idm = parseInt(data[0].quantity+body.quantity);
      return sqlDb("cartsdetail").update({"userId":userId ,"bookId":body.bookId,"quantity":idm}).then(data =>{
        return true;
      });
    });  
    };
  
    return isInDb(sqlDb,body.bookId).then( inDb =>{
      if(!inDb){
        return sqlDb("cartsdetail")
        .insert({"userId":userId ,"bookId":body.bookId,"quantity":body.quantity});
      }
      else{
        return updateBook(sqlDb,userId,body).then(added =>{
          if(added)
            return { ok: "libro aggiunto"};
          return {error: "libro non aggiunto"}
  
        });
      }
    });
     
  }

