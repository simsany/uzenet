var mongoose = require("mongoose");
var commentsSchema = new mongoose.Schema({
	text: String,
	author: String,
	date: {
		type: Date,
		default: Date.now
	}

});
module.exports = mongoose.model("Commens", commentsSchema);
