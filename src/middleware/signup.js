'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // get the body of the request
    const body = req.body;

    // get the user service --> CREATE NEW USER
    app.service('users').create({
      email: body.email,
      password: body.password
    })
    // redirect to /login post
    .then(user => res.redirect('/login.html'))

    // on error, go to the next middleware [error middleware]
    .catch(next);
  };
};
