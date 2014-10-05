var extend = require('util')._extend;
var gravatar = require('gravatar');

var DEFAULTS = {
    url: '/fallback.png'
};

module.exports = function (options) {
  options = extend(extend({}, DEFAULTS), options);

  options.url = (options.email)
              ? gravatar.url(options.email, {s: '48', r: 'x'})
              : options.url;

  return options;
};
