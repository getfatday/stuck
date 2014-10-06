var extend = require('util')._extend;
var gravatar = require('gravatar');

var DEFAULTS = {
  resolver: gravatar.url,
  fallback: 'retro'
};

module.exports = function (options) {
  options = extend(extend({}, DEFAULTS), options);

  if (options.email) {
    options.url = options.resolver(options.email,
                                   { s: '48',
                                     r: 'x',
                                     d: options.fallback
                                   });
    if (!options.url) {
      options.error = true;
      delete options.url;
    }
  }

  return options;
};
