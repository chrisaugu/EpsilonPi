const restful = require('node-restful');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Music Schema
const musicSchema = new Schema({
	title: {type: String },
	artists: [{type: Schema.ObjectId, ref: 'Artist'}],
	album: {type: Schema.ObjectId, ref: 'Album' },
	genre: {type: Schema.ObjectId, ref: 'Genre' },
	year: {type: Date },
	duration: {type: String	},
	bitrate: {type: Number},
	lyrics: {type: String	},
	url: {type: String },
	copyright: {type: String },
	quality: {type: String },
	size: {type: Number },
	playback_count: {type: Number },
	played: {type: Date },
	download_count: {type: Number },
	rating: {type: Number },
	added: {type: Date, default: Date.now },
});

const Music = module.exports = restful.model('Music', musicSchema);

// Get Musics
module.exports.getMusics = (callback, limit) => {
	Music.find(callback)
	.lean()
	.populate('artist')
	.limit(limit);
}

// Get Music
module.exports.getMusicById = (id, callback) => {
	Music.findById(id, callback);
}

// Add Music
module.exports.addMusic = (music, callback) => {
	Music.create(music, callback);
}

// Add Music
module.exports.searchMusic = (music, callback) => {
	Music.find(music, callback);
}

// Update Music
module.exports.updateMusic = (id, music, options, callback) => {
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
	}
	Music.findOneAndUpdate(query, update, options, callback);
}

// Delete Music
module.exports.removeMusic = (id, callback) => {
	var query = {_id: id};
	Music.remove(query, callback);
}