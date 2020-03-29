const restful = require('node-restful');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Artist Schema
const Artist = module.exports = restful.model('Artist',  new Schema({
	stage_name: {type: String},
	bio: {type: String },
	picture: {type: Schema.ObjectId, ref: 'Image' },
	musics: [{type: Schema.ObjectId, ref: 'Music'}],
	albums: [{type: Schema.ObjectId, ref: 'Album'}],
	search_token: {type: String },
	labels: [{type: String}],
	create_date: {type: Date,default: Date.now },
}));

// Get artist
module.exports.getArtist = (id, callback) => {
	Artist.findById(id).exec(callback);
};

// Get all artists
module.exports.getArtists = (options, limit, callback) => {
	Artist.find(options).limit(limit).exec(callback);
};

// Add artist
module.exports.addArtist = (artist, callback) => {
	Artist.create(artist, callback);
};

// Update artist
module.exports.updateArtist = (id, artist, options, callback) => {
	var query = {_id: id};
	var update = {
		stage_name: artist.name || "",
		bio: artist.bio || "",
		genres: artist.genre || "",
		picture: artist.picture || "",
		url: artist.url || "",
		musics: artist.musics || "",
		labels: artist.labels || "",
	}
	Artist.findOneAndUpdate(query, update, options, callback);
};

// Delete artist
module.exports.removeArtist = (id, callback) => {
	var query = {_id: id};
	Artist.remove(query, callback);
};