'use strict';

var utils = require('../utils/writer.js');
var Theme = require('../service/ThemeService');

module.exports.getBookByTheme = function getBookByTheme (req, res, next) {
  var themeid = req.swagger.params['themeid'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Theme.getBookByTheme(themeid,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gettheme = function gettheme (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Theme.gettheme(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
