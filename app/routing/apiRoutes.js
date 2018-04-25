
var characters = require('../data/friends.js');
var bodyParser = require("body-parser");


module.exports = function (app) {

  app.get('/api/characters', function (req, res) {
    res.json(characters);
    console.log(characters)
  });

app.post("/api/new", function (req, res) {
  // newFriend is the user that filled out the survey
  var newCharacter = req.body;
  console.log(newCharacter)
  // Put new friend from survey in "database" array
  characters.push(newCharacter);

  // return the best match friend
  res.json(characters);
});


};