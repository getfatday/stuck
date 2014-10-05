var express = require('express');
var app = express();
var stuck = require('./lib/stuck');
var hbs = require('express-handlebars');

app.engine('handlebars', hbs({}));
app.set('view engine', 'handlebars');

app.use('/', express.static(__dirname));

app.get('/', function(req, res){
  res.render('stuck');
});

app.get('/stuck', function(req, res){
  res
  .render('stuck', stuck(req.query));
});

app.get('/stuck/:id', function(req, res){
  res
  .render('stuck', stuck({url: '/i/'+req.params.id+'.svg'}));
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
