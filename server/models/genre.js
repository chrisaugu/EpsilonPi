const restful = require('node-restful');
const mongoose = restful.mongoose;
const Schema = mongoose.Schema;

// Genre Schema
const genreSchema = new Schema({
	name: { type: String, unqiue: true },
	img: { type: Schema.ObjectId, ref: 'Picture' }
});

module.exports = restful.model('Genre', genreSchema);
