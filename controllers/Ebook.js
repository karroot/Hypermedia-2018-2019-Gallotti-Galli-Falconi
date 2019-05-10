'use strict';

var utils = require('../utils/writer.js');
var Ebook = require('../service/EbookService');

module.exports.getAuthorByebook = function getAuthorByebook (req, res, next) {
  var ebookId = req.swagger.params['ebookId'].value;
  Ebook.getAuthorByebook(ebookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventsByebook = function getEventsByebook (req, res, next) {
  var ebookId = req.swagger.params['ebookId'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Ebook.getEventsByebook(ebookId,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReviewsByebook = function getReviewsByebook (req, res, next) {
  var ebookId = req.swagger.params['ebookId'].value;
  Ebook.getReviewsByebook(ebookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getebookById = function getebookById (req, res, next) {
  var ebookId = req.swagger.params['ebookId'].value;
  Ebook.getebookById(ebookId)
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
