'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.getCartByUser = function getCartByUser (req, res, next) {
  var id = req.swagger.params['id'].value;
  User.getCartByUser(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOrdersByUser = function getOrdersByUser (req, res, next) {
  var id = req.swagger.params['id'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  User.getOrdersByUser(id,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

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
  User.getUserById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logoutUser = function logoutUser (req, res, next) {

  User.logoutUser()
    .then(function (response) {
      req.session.loggedin = false;
      utils.writeJson(res, response);
    })

    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postuserLogin = function postuserLogin (req, res, next) {
  var username = req.swagger.params["username"].value;
  var password = req.swagger.params["password"].value;
  if(!req.session.loggedin) {
      req.session.loggedin = true;
  } else {
     req.session.loggedin = !req.session.loggedin;
  }
  User.postuserLogin(username, password)
    .then(function(response) {
      if(response.length == 1) {
        utils.writeJson(res,response,200);}
      else{
        
        utils.writeJson(res,response,403);}
      }
    )
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
  var body = req.swagger.params['body'].value;
  User.postuserRegister(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
