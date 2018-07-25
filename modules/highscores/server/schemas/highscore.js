const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const highscoreSchema = mongoose.Schema({
	player: String,
	score: Number,
	version: String,
	level: Number,
	mobile: Boolean
}, { timestamps: true });
highscoreSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Highscore', highscoreSchema);
