var path = require("path");

module.exports = function(app) {
	app.get("/survey", function(req, res) {
		console.log("hello");
		res.sendFile(path.join(__dirname,"/../public/survey.html"));
	});

	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname,"/../public/home.html"));
	});
	
};

// I am almost sure this is complete...