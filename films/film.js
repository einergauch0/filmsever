var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// se define el esquema que tendra el json
var film = new Schema({
	title: String,
	year: String,
	urlTrailer: String,
	description: String
});

// se exporta para poder ser usado desde otro archivo
module.exports = mongoose.model("Film", film); 	