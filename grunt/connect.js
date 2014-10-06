module.exports = function (grunt, options) {
	return {
    server: {
      options: {
        hostname: '*',
        port: process.env.PORT || '6789',
        base: '.',
        middleware: [
          require('../index')
        ]
      }
    },
    keepalive: {
      options: {
        hostname: '*',
        port: process.env.PORT || '6789',
        base: '.',
        keepalive: true,
        middleware: [
          require('../index')
        ]
      }
    }
	};
};
