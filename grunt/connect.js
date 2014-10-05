module.exports = function (grunt, options) {
	return {
    server: {
      options: {
        hostname: '*',
        port: '6789',
        base: '.'
      }
    },
    keepalive: {
      options: {
        hostname: '*',
        port: '6789',
        base: '.',
        keepalive: true
      }
    }
	};
};
