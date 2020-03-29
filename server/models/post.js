/* Dependencies */
var restful = require('node-restful');
var mongoose = restful.mongoose;
var Schema = mongoose.Schema;

// Schema
var postSchema = new Schema({
    story: {type: String},
    owner: { type: Schema.ObjectId, ref: 'User' },
    likes: {type: Number},
    createdAt: {type: Date, default: Date.now}
});

// Return model
const Post = module.exports = mongoose.model('Post', postSchema);

// Get Post
module.exports.getPosts = (callback, limit) => {
    Post.find(callback).limit(limit);
}

// Get Post
module.exports.getPostById = (id, callback) => {
    Post.findById(id, callback);
}

// Add Post
module.exports.addPost = (post, callback) => {
    Post.create(post, callback);
}

// Update Post
module.exports.updatePost = (id, post, options, callback) =>{
    var query = {_id: id};
    var update = {};
    for (var i in post) {
        update[i] = post[i];
    }
    Post.findOneAndUpdate(query, update, options, callback);
}

// Delete Post
module.exports.deletePost = (id, callback) => {
    var query = {_id: id};
    Post.remove(query, callback);
}
