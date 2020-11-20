const restful = require('node-restful');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Track Schema
const TrackSchema = new Schema({
	mood: String,
	playback_count: {type: Number},
	last_played: {type: Date},
	download_count: {type: Number},
	user_rating: {type: Number},
	added: {type: Date, default: Date.now()}
});

const MusicDetails = module.exports = restful.model('TrackDetail', TrackSchema);