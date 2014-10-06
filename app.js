var app = require('./index');
var port = process.env.PORT || 6789;

app.listen(port, function() {
  console.log("Stuck app is running at localhost:" + port);
});
