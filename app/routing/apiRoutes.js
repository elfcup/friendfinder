var path = require("path");
var friends = require('../data/friends.js');


module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
		// The line above will display the array of friends from the friends.js file
		// res.sendFile(path.join(__dirname,"/../public/survey.html"));
	})
};

// module.exports = function(app) {
// 	app.post("/api/friends", function(req, res) {
// 		// Lots of stuff required in here!!!

// 	})

// };


// This page will GET and POST routes /api/friends
// This will likely be a long page, since it has to include the math 
// function and the way to compare to the friends listed array