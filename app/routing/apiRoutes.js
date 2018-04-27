
var characters = require('../data/friends.js');
var bodyParser = require("body-parser");


module.exports = function (app) {

  app.get('/api/characters', function (req, res) {
    res.json(characters);
    console.log(characters)
  });

app.post("/api/new", function (req, res) {

  var newCharacter = req.body;
  characters.push(newCharacter);
//looping from list
  for(var i = 0; i < characters.length; i++){
    console.log(characters[i].scores)
var sum = 0;
//getting sum from the list
    for ( var j = 0, l = characters[i].scores.length; j < l; j++ ) {
      sum += characters[i].scores[j];
  }
  console.log(sum);

  }


  console.log(newCharacter)
  console.log(characters)


  // return the best match friend
  res.json(characters);
});


};