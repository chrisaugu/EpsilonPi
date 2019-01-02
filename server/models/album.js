const restful = require('node-restful');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
	name: {type: String},
	album_art: {type: Schema.ObjectId, ref: 'Image'},
	genres: [{type: Schema.ObjectId, ref: 'Genre'}]
});

module.exports = restful.model('Album', AlbumSchema);