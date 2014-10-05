module.exports = function (grunt, options) {
	return {
		files: [
			'Gruntfile.js',
			'grunt/*',
			'lib/**/*.js',
      'templates/**/*.mustache',
      '*.less',
      '*.html'
		],
		tasks: ['build'],
		options: {
			livereload: true
		}
	};
};
