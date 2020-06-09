const restful = require('node-restful');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Music Schema
const musicSchema = new Schema({
	playback_count: {type: Number},
	last_played: {type: Date},
	download_count: {type: Number},
	rating: {type: Number},
	added: {type: Date, default: Date.now()}
});

const MusicDetails = module.exports = restful.model('MusicDetails', musicSchema);