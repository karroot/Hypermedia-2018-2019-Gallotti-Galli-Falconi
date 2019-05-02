'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.aboutGET = function aboutGET (req, res, next) {
  Default.aboutGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.contactUsGET = function contactUsGET (req, res, next) {
  Default.contactUsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fAQGET = function fAQGET (req, res, next) {
  Default.fAQGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.workWithUsGET = function workWithUsGET (req, res, next) {
  Default.workWithUsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
