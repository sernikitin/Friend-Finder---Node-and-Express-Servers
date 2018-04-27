var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//var characters = require('./app/data/friends.js');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3113;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);
// Sets up the Express app to handle data parsing



// Starts the server to begin listening
// =============================================================
app.listen( process.env.PORT|| PORT, function() {
  console.log("App listening on PORT " + PORT);
});
