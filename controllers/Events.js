'use strict';

var utils = require('../utils/writer.js');
var Events = require('../service/EventsService');

module.exports.getAuthorByEvents = function getAuthorByEvents (req, res, next) {
  var id = req.swagger.params['id'].value;
  Events.getAuthorByEvents(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventById = function getEventById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Events.getEventById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEvents = function getEvents (req, res, next) {
  var bookId = req.swagger.params['bookId'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  Events.getEvents(bookId,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postEvent = function postEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  Events.postEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putEvent = function putEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  Events.putEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
