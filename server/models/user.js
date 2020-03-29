const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
// user info is taken from facebook
const User = mongoose.model('User',  new Schema({
	name: {type: String},
	bio: {type: String },
	picture: {type: String},
	isArtist: {type: Boolean, default: false},
	search_token: {type: String },
	playlists: [{type: Schema.ObjectId, ref: 'Playlist'}],
	create_date: {type: Date, default: Date.now()},
}));

module.exports = User;
