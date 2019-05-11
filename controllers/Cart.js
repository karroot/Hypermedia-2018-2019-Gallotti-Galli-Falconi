'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');

module.exports.deleteCartItem = function deleteCartItem (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var body = req.swagger.params['body'].value;
  Cart.deleteCartItem(userId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSingleCart = function getSingleCart (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  Cart.getSingleCart(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.postCartItem = function postCartItem (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var body = req.swagger.params['body'].value;
  Cart.postCartItem(userId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
