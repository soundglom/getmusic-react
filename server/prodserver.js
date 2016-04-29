var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT || 3000;
var publicPath = path.resolve(__dirname, 'dist/');

function prodServer() {
  app.use(express.static(publicPath));

  app.get('*', function (req, res) {
    res.sendFile('/index.html');
  });

  app.listen(port, function () {
    console.log('Server running on port ' + port);
  });
}

module.exports = prodServer