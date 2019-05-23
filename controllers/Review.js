'use strict';

var utils = require('../utils/writer.js');
var Review = require('../service/ReviewService');

module.exports.getAllReviews = function getAllReviews (req, res, next) {

  Review.getAllReviews()
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

