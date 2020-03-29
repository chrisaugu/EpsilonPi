const restful = require('node-restful');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
	name: {type: String},
	description: {type: Schema.ObjectId, ref: 'Image'},
	songs: [{type: Schema.ObjectId, ref: 'Music'}],
	ownerId: {type: Schema.ObjectId, ref: 'User'},
	contributorsId: [{type: Schema.ObjectId, ref: 'User'}],
	create_date: {type: Date, default: Date.now }
});

module.exports = restful.model('Playlist', PlaylistSchema);