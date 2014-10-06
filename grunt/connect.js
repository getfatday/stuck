module.exports = function (grunt, options) {
	return {
    server: {
      options: {
        hostname: '*',
        port: '6789',
        base: '.',
        middleware: [
          require('../index')
        ]
      }
    },
    keepalive: {
      options: {
        hostname: '*',
        port: '6789',
        base: '.',
        keepalive: true,
        middleware: [
          require('../index')
        ]
      }
    }
	};
};
