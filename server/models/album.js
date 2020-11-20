const restful = require('node-restful');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
	name: {type: String},
	album_art: {type: Schema.ObjectId, ref: 'Image'},
	genre: [{type: Schema.ObjectId, ref: 'Genre'}],
	artist: [{type: Schema.ObjectId, ref: 'Artist'}],
	year: Date
});

module.exports = restful.model('Album', AlbumSchema);