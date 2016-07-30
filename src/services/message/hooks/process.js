'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
  return function(hook) {
    const user = hook.params.user;

    const text = hook.data.text
      // messages cant be longer than 400 characters
      .substring(0, 400)
      // do some basic HTML escaping
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    // override
    hook.data = {
      text,
      userId: user._id,
      createdAt: new Date().getTime()
    };
  };
};
