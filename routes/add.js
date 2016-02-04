var data = require("../data.json");

exports.addFriend = function(req, res) {
	var newName = req.query.name;
	var newDesc = req.query.description;

	var newFriend = {
		"name": newName,
		"description": newDesc,
		"imageURL": "http://lorempixel.com/400/400"
	}

	res.render('add', newFriend);
	data["friends"].push(newFriend);
}