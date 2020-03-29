module.exports = function(app) {
    // Models
    var Post = require('../models/post');
    
    // Routes
    Post.methods(['get', 'put', 'post', 'delete']);
    Post.route('posts', ['get'], (req, res) => {
        Post
        .find({})
        .populate({
            path: 'owner',
            select: 'name'
        })
        .exec(function(err, posts) {
            if (err){
                res.send(posts);
            }
            res.json(posts);
        });

        Post.getPosts((err, posts) => {
            if(err){
                throw err;
            }
            res.json(posts);
        });
    });
    
    app.get('/posts/:_id', (req, res) => {
        Post.getPostById(req.params._id, (err, post) => {
            if(err){
                throw err;
            }
            res.json(post);
        });
    });
    
    app.post('/posts', (req, res) => {
        var post = req.body;
        Post.addPost(post, (err, post) => {
            if(err){
                throw err;
            }
            res.json(post);
        });
    });
    
    app.put('/posts/:_id', (req, res) => {
        var id = req.params._id;
        var post = req.body;
        Post.updatePost(id, post, {}, function (err, post) {
            if(err){
                throw err;
            }
            res.json(post);
        });
    });
    
    app.delete('/posts/:_id', (req, res) => {
        var id = req.params._id;
        Post.deletePost(id, (err, post) => {
            if(err){
                throw err;
            }
            res.json(post);
        });
    });

    Post.register(app, '/posts');
    
    return app;
};