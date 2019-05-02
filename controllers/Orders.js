'use strict';

var utils = require('../utils/writer.js');
var Orders = require('../service/OrdersService');

module.exports.getAllOrders = function getAllOrders (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Orders.getAllOrders(userId,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBooksByOrder = function getBooksByOrder (req, res, next) {
  var id = req.swagger.params['id'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Orders.getBooksByOrder(id,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOrderById = function getOrderById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Orders.getOrderById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pOSTOrder = function pOSTOrder (req, res, next) {
  var body = req.swagger.params['body'].value;
  Orders.pOSTOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateOrder = function updateOrder (req, res, next) {
  var body = req.swagger.params['body'].value;
  Orders.updateOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
