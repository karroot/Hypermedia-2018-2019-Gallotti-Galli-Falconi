'use strict';

var utils = require('../utils/writer.js');
var Book = require('../service/BookService');



module.exports.getBookById = function getBookById (req, res, next) {
  var bookId = req.swagger.params['bookId'].value;
  Book.getBookById(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventsByBook = function getEventsByBook (req, res, next) {
  var bookId = req.swagger.params['bookId'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Book.getEventsByBook(bookId,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReviewsByBook = function getReviewsByBook (req, res, next) {
  var bookId = req.swagger.params['bookId'].value;
  Book.getReviewsByBook(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSimilarBook = function getSimilarBook (req, res, next) {
  var bookId = req.swagger.params['bookId'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Book.getSimilarBook(bookId,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getbook = function getbook (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;

  Book.getbook(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    })};

