const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist'));
// default Heroku PORT
app.listen(process.env.PORT || 8080);

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/angularmovies/index.html'));
});

console.log('cpnsole listening');
