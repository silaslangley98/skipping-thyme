var mongoose = require('mongoose');

var plantSchema = new mongoose.Schema({
    guid: String,
	price: Number,
	picture: String,
	thumbnail: String,
	inventory: Number,
	name: String,
	type: String,
	family: String,
	foliage: String,
	amountOfSun: String,
	description: String,
	tags: Array
});

var Plant = mongoose.model('Plant', plantSchema);