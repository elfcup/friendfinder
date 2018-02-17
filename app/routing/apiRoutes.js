var path = require("path");
var friends = require('../data/friends.js');


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        var results = res.json(friends);
        // console.log(results.name);
        // The line above will display the array of friends from the friends.js file
        // res.sendFile(path.join(__dirname,"/../public/survey.html"));
    })

    app.post("/api/friends", function(req, res) {
        // 		// Lots of stuff required in here!!!
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000


        };
         console.log(req.body);

         // =============================================
         // the above console works but the below one does not!

        var userData = req.body;
        console.log(userData.name);
        console.log("user input: " + userData);
       

        // above shows the name, img link, and array of the user input
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;
        console.log(userScores);
        
        

        

        for (var i = 0; i < friends.length; i++) {
            console.log("friend: " + friends[i].name);
            // This above console log will list all of the friends in the friends array
            var totalDifference = 0;

           
            for (var j = 0; j < friends[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference
                }
            }
        }
        friends.push(userData);

        res.json(bestMatch);
    });

}




// This page will GET and POST routes /api/friends
// This will likely be a long page, since it has to include the math 
// function and the way to compare to the friends listed array