module.exports = function (grunt, options) {
	return {
		single: {
			options: {
				baseUrl: './',
				mainConfigFile: 'script/main.js',
				name: 'node_modules/almond/almond',
				out: 'stuck.js',
	      paths: {
		      'h5f': '/node_modules/h5f/h5f.min'
	      },
				preserveLicenseComments: false,
				optimize: 'none',
				generateSourceMaps: true
			}
		}
	};
};
