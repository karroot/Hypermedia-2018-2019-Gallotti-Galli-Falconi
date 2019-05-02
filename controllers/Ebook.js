'use strict';

var utils = require('../utils/writer.js');
var Ebook = require('../service/EbookService');

module.exports.getAuthorByeBook = function getAuthorByeBook (req, res, next) {
  var ebookId = req.swagger.params['ebookId'].value;
  Ebook.getAuthorByeBook(ebookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventsByeBook = function getEventsByeBook (req, res, next) {
  var ebookId = req.swagger.params['ebookId'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Ebook.getEventsByeBook(ebookId,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReviewsByeBook = function getReviewsByeBook (req, res, next) {
  var ebookId = req.swagger.params['ebookId'].value;
  Ebook.getReviewsByeBook(ebookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.geteBookById = function geteBookById (req, res, next) {
  var ebookId = req.swagger.params['ebookId'].value;
  Ebook.geteBookById(ebookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getebooks = function getebooks (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Ebook.getebooks(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
