
var characters = require('../data/friends.js');
var bodyParser = require("body-parser");


module.exports = function (app) {

  app.get('/api/characters', function (req, res) {
    res.json(characters);
    console.log(characters)
  });

  app.post("/api/new", function (req, res) {

    var newCharacter = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;


    //runs through all 
    for (var i = 0; i < characters.length; i++) {
      var scoresDiff = 0;
      //run through scores
      for (var j = 0; j < newCharacter.length; j++) {
        scoresDiff += (Math.abs(parseInt(characters[i].scores[j]) - parseInt(newCharacter[j])));
      }

      scoresArray.push(scoresDiff);
    }
    //score array run
    for (var i = 0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoresArray[bestMatch]) {
        bestMatch = i;
      }
    }
    var bff = characters[bestMatch];
    res.json(bff);

    characters.push(req.body);
  });


};