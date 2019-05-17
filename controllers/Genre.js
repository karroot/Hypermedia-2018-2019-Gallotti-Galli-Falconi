'use strict';

var utils = require('../utils/writer.js');
var Genre = require('../service/GenreService');

module.exports.getBookByGenre = function getBookByGenre (req, res, next) {
  var genreid = req.swagger.params['genreid'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Genre.getBookByGenre(genreid,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getgenre = function getgenre (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Genre.getgenre(offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
