module.exports = function (grunt, options) {
	return {
    files: [
			'Gruntfile.js',
			'grunt/*.js',
			'test/*',
			'lib/**/*.js'
    ],
    options: {
      laxbreak: true,
      debug: true,
      ignores: [
        'lib/stuck/template.js'
      ],
      globals: {
        console: true,
        define: true,
        require: true
      }
    }
	};
};
