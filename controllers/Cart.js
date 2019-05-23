'use strict';

var utils = require('../utils/writer.js');
var Cart = require('../service/CartService');



module.exports.deleteCartDetailByUserId = function deleteCartDetailByUserId (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var body = req.swagger.params['body'].value;
  if (req.session.logged_id != userId ) {
    utils.writeJson(res, { error: "sorry, you must be authorized" }, 404);
} else {
  Cart.deleteCartDetailByUserId(userId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
}};


module.exports.putCartDetailByUserId = function putCartDetailByUserId (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var body = req.swagger.params['body'].value;
    if (req.session.logged_id != userId ) {
    utils.writeJson(res, { error: "sorry, you must be authorized" }, 404);
} else 
{
  Cart.putCartDetailByUserId(userId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
}
};