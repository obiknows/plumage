'use strict';

/*
  index.js : ROOT MIDDLEWARE
*/
const signup = require('./signup'); // signup middleware

const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');

module.exports = function() {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;

  // signup
  app.post('/signup', signup(app));


  // 404 and logging 
  app.use(notFound());
  app.use(logger(app));
  app.use(handler());
};
