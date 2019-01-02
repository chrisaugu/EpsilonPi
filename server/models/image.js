const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
	name: String,
	description: String,
	url: String,
	image_buff: Buffer,
	create_date:{type: Date, default: Date.now },
});

ImageSchema.methods.addImage = (image, callback) => {
	this.create(image, callback);
};

ImageSchema.methods.updateImage = (id, image, options, callback) => {
	var query = {_id: id};
	var update = {
		name: image.name,
		description: image.desc,
		image_buff: image.buff,
		url: image.url,
	}
	this.findOneAndUpdate(query, update, options, callback);
};

ImageSchema.methods.removeImage = (id, callback) => {
	var query = {_id: id};
	this.remove(query, callback);
};

module.exports = mongoose.model('Image', ImageSchema)