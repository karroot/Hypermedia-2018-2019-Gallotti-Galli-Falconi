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
        .primary()
        .increments();
        table.text("username")
        .notNullable();
        table.text("address");
        table.text("password")
        .notNullable();

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
exports.getCartDetailByUser = function(id) {
  return sqlDb("cartsdetail")
  .select('cartsdetail.quantity', 'cartsdetail.ebook', 'cartsdetail.bookId', 'books.title', 'books.status', 'books.value', 'books.currency')
  .innerJoin('books', 'cartsdetail.bookId', 'books.id')
  .where({userId: id})
  .then(data => {
    return data
  });
}





/**
 * Logs out current logged in user session
 * 
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  req.session.logged_id=false;
}


/**
 * Login
 * Login with a form
 *
 * mail String 
 * password String 
 * no response value expected for this operation
 **/
exports.postuserLogin = function(mail,password) {
  //facciamo così per sapere le password da salvare
  let hash = bcrypt.hashSync(password,10);
console.log("pass :");
console.log(hash);
  return sqlDb("users").where({"address":mail});
}

exports.getUserById = function(id) {
  
  return sqlDb("users").where({"id":id});
}


exports.postuserRegister = function(mail,password,username) {
  
function isInDb (sqlDb,mail){
return sqlDb("users").count("* as count").where({address:mail}).then(data =>{
  
  console.log("STAMPO DATA[0] COUNT " + data[0].count);

  return (data[0].count > 0) ? true : false;
});
};

function insertUser (sqlDb,mail,password,username){
  return sqlDb("users").count("* as count").then(data =>{
    var idm = parseInt(data[0].count) +1;
    return sqlDb("users").insert([{
      id: idm,
      username: username,
      address: mail,
      password: bcrypt.hashSync(password, 10)
    }]).then(data =>{
      return true;
    });
  });  
  };

  return isInDb(sqlDb,mail).then( inDb =>{
    if(inDb){
      return {error: "mail usata"}
    }
    else{
      return insertUser(sqlDb,mail,password,username).then(added =>{
        if(added)
          return { ok: "utente registrato"};
        return {error: "utente non registrato"}

      });
    }
  });
   
}