var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3012;

require('./app/routing/htmlRoutes.js')(app);
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());





// Starts the server to begin listening
// =============================================================
app.listen( process.env.PORT|| PORT, function() {
  console.log("App listening on PORT " + PORT);
});
