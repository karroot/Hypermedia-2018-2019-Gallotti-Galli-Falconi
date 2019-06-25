'use strict';

var utils = require('../utils/writer.js');
var Ebook = require('../service/EbookService');

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
