'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');
var bcrypt = require('bcrypt');
let saltRounds = 10;


module.exports.getCartDetailByUser = function getCartDetailByUser (req, res, next) {
  var id = req.swagger.params['id'].value;
  if (req.session.logged_id != id ) {
    res.writeHead(301,
      { Location: "/pages/login.html"  }
   );
   
   res.end();
    
} else 
{
  User.getCartDetailByUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
}};

module.exports.getReviewsByUser = function getReviewsByUser (req, res, next) {
  var id = req.swagger.params['id'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  User.getReviewsByUser(id,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserById = function getUserById (req, res, next) {
  var id = req.swagger.params['id'].value;
  if (req.session.logged_id == id ){
    User.getUserById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
}  
else 
{
  
  utils.writeJson(res, { error: "sorry, you must be authorized" }, 404);
}
};

module.exports.logoutUser = function logoutUser (req, res, next) {

  User.logoutUser()
    .then(function (response) {
      req.session.logged_id = false;
      utils.writeJson(res, response);
    })

    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postuserLogin = function postuserLogin (req, res, next) {

  var password = req.swagger.params["password"].value;
  var mail = req.swagger.params['mail'].value;

  User.postuserLogin(mail, password)
  .then(function(response){ 

     bcrypt.compare(password, response[0].password, function (err, result) {

    if (result == true) {
      req.session.logged_id= response[0].id;
      utils.writeJson(res,response,200);

    } else {

      utils.writeJson(res,response,403);
    }});
   
    
  })
  .catch(function(response) {
      if(response.length ==1) {
        utils.writeJson(res,response,200);
       }
      else{
        utils.writeJson(res,response,403);
   
      }
});
};

    module.exports.postuserRegister = function postuserRegister (req, res, next) {
      var mail = req.swagger.params['mail'].value;
      var password = req.swagger.params['password'].value;
      var username = req.swagger.params['username'].value;
      User.postuserRegister(mail,password,username)
        .then(function (response) {
          utils.writeJson(res, response);
        })
        .catch(function (response) {
          utils.writeJson(res, response);
        });
    };

