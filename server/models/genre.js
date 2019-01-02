const restful = require('node-restful');
const mongoose = restful.mongoose;

// Genre Schema
const genreSchema = mongoose.Schema({
	name: { type: String }
});

module.exports = restful.model('Genre', genreSchema);