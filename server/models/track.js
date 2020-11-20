const restful = require('node-restful');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// https://s1.hulkshare.com/song_images/original/5/4/6/5462dda24aae30645c6d733cacbcfe36.jpg?dd=1486504580

// Track Schema
const trackSchema = new Schema({
	title: {type: String},
	artist: {type: Schema.ObjectId, ref: 'Artist'},
	featured_artists: [{type: Schema.ObjectId, ref: 'Artist'}],
	album: {type: Schema.ObjectId, ref: 'Album'},
	genre: {type: Schema.ObjectId, ref: 'Genre'},
	year: {type: Date},
	duration: {type: String},
	bitrate: {type: Number},
	lyrics: {type: String},
	url: {type: String},
	copyright: {type: String},
	quality: {type: String},
	size: {type: Number},
	playback_count: {type: Number},
	last_played: {type: Date},
	download_count: {type: Number},
	rating: {type: Number},
	added: {type: Date, default: Date.now()}
});

const Track = module.exports = restful.model('Track', trackSchema);

// Get Tracks
module.exports.getTracks = (callback, limit) => {
	Track
		.find(callback)
		.lean()
		.populate('artist')
		.limit(limit);
};

// Get Track
module.exports.getTrackById = (id, callback) => {
	Track.findById(id, callback);
};

// Add Track
module.exports.addTrack = (music, callback) => {
	Track.create(music, callback);
};

// Add Track
module.exports.searchTrack = (music, callback) => {
	Track.find(music, callback);
};

// Update Track
module.exports.updateTrack = (id, music, options, callback) => {
	var query = {_id: id};
	var update = {
		title: music.title,
		genre: music.genre,
		lyrics: music.lyrics,
		artist: music.artist,
		album: music.album,
		publisher: music.publisher,
		pages: music.pages,
		album_art: music.album_art,
		url: music.url
	};
	Track.findOneAndUpdate(query, update, options, callback);
};

// Delete Track
module.exports.removeTrack = (id, callback) => {
	var query = {_id: id};
	Track.remove(query, callback);
};
