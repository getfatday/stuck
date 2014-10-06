module.exports = function (grunt, options) {
	return {
		files: [
			'Gruntfile.js',
			'grunt/*',
			'lib/**/*.js',
      'script/*.js',
      'views/*.handlebars',
      '*.less',
      '*.html'
		],
		tasks: ['build'],
		options: {
			livereload: true
		}
	};
};
