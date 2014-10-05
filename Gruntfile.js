module.exports = function(grunt) {

	var options = {
		data: {
			pkg: grunt.file.readJSON('package.json')
		},
		init: true,
		loadGruntTasks: {
			pattern: 'grunt-!(cli)*'
		}

	};

	require('load-grunt-config')(grunt, options);
};
