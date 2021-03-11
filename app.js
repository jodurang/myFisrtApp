var express = require('express');
var app = express();

app.get('/', function(req, res) {
  console.log('req: ' + req.url + ' at ' + Date.now());
  res.send('Hello World!' + ' at ' + Date.now() );
});

var port = 3000;
app.listen(port, function() {
  console.log('server on! http://localhost:' + port);
});
