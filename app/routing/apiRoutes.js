
var characters = require('../data/friends.js');
var bodyParser = require("body-parser");


module.exports = function (app) {

  app.get('/api/characters', function (req, res) {
    res.json(characters);
    console.log(characters)
  });

app.post("/api/new", function (req, res) {

  var newCharacter = req.body;
  for(var i = 0; i < newCharacter.scores.length; i++){
    var perScrore = newCharacter.scores[i]
    console.log("moving stuff for score ")
    console.log(perScrore)
  }

  for(var i = 0; i < characters.length; i++){
    console.log(characters[i].scores)
var sum = 0;
    // for(var index = 0; index < characters[i].scores.length; index++) {
    //   var score = Math.abs(characters[i].scores[index]);
    //   score += index;
     
    // }
    for ( var j = 0, l = characters[i].scores.length; j < l; j++ ) {
      sum += characters[i].scores[j];
  }
console.log(characters[i].scores[j])
  console.log(sum);
   
 

  }

  
  // newFriend is the user that filled out the survey

  console.log(newCharacter)



  // Put new friend from survey in "database" array
  characters.push(newCharacter);

  // return the best match friend
  res.json(characters);
});


};