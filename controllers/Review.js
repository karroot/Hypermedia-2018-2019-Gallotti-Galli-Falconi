'use strict';

var utils = require('../utils/writer.js');
var Review = require('../service/ReviewService');

module.exports.getAllReviews = function getAllReviews (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var bookId = req.swagger.params['bookId'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Review.getAllReviews(userId,bookId,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBookByReview = function getBookByReview (req, res, next) {
  var id = req.swagger.params['id'].value;
  Review.getBookByReview(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getReviewById = function getReviewById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Review.getReviewById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

