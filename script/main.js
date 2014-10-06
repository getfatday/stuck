require.config({
	baseUrl: '../',
	paths: {
		'h5f': '/node_modules/h5f/h5f.min'
	}
});

require(['h5f'], function(h5f){
  debugger;
  var setClass = function (name) {
    return function (event) {
      document.body.className = name;
    };
  };
  document.addEventListener('focusin', setClass('edit'));
  document.addEventListener('focusout', setClass('view'));
});
