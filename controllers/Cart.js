'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');

module.exports.dELETECartItem = function dELETECartItem (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var body = req.swagger.params['body'].value;
  Cart.dELETECartItem(userId,body)
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

module.exports.pOSTCartItem = function pOSTCartItem (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var body = req.swagger.params['body'].value;
  Cart.pOSTCartItem(userId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
