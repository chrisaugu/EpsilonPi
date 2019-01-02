// Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const restful = require('node-restful');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const dotenv = require('dotenv').config();

app.use(express.static(path.join(__dirname, '../client')));
app.use('/images', express.static(path.join(__dirname, '../client/src/img')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
	key: 'user_sid',
	secret: 'monkey',
	resave: false,
	saveUninitialized: false,
	cookie: { maxAge: 2 * 7 * 24 * 60 * 60 * 1000, expires: 600000 }
}));
app.use(passport.initialize());
app.use(passport.session());

/** Registers a function used to serialize user objects into the session. */
passport.serializeUser((user, done) => {
	console.log(user);
	//done(null, user._id);
	done(null, user.id);
});
/** Registers a function used to deserialize user objects out of the session. */
passport.deserializeUser((id, done) => {
	Photos.findById(id).then((user) => {
	done(null, user);
	});
});

passport.use(new FacebookStrategy({
	clientID: "1791165357568831", // process.env.FACEBOOK_APP_ID,
	clientSecret: "70b43373323e9c92705ecec5b1189f78", // process.env.FACEBOOK_APP_SECRET,
	callbackURL: "/user", // process.env.CALLBACK_URL,
	profileFields: ['id','displayName','birthday','age','gender','profileUrl','link','emails','photos'],
	enableProof: true
}, function(accessToken, refreshToken, profile, done) {

	console.log(profile);
	var me = new Photos({
		email: profile.emails[0].value,
		name: profile.displayName
	});

	/* save if new */
	Photos.findOne({ email: me.email }, function(err, u) {
		if(!u) {
			me.save().then(function(newUser) {
				console.log("new user created: " + newUser);
				done(null, newUser);
			}).catch(function(err){
				return done(err);
			});
		} else {
			console.log("user is: " + u);
			done(null, u);
		}
	});
}));

// Connect to Mongoose
mongoose.connect("mongodb://localhost:27017/epsilonpi");
var db = mongoose.connection;
db.on("open", function(){
    console.log("Connected: Successfully connect to mongo server");
});
db.on('error', function(){
    console.log("Error: Could not connect to MongoDB. Did you forget to run 'mongod'?");
});

// Node.js
var sourceMap = require('source-map');

var generator = new sourceMap.SourceMapGenerator({
  file: "my-generated-javascript-file.js",
  sourceRoot: "../client/src/js/"
});

// console.log(generator.toString())

let Artist = require('./models/artist');
require('./models/album');
require('./models/genre');
require('./models/music');
require('./models/image');

let Album = mongoose.model('Album');
let Image = mongoose.model('Image');
let Music = mongoose.model('Music');
let Genre = mongoose.model('Genre');

app.route('/api/artists')
	.get((req, res) => {
		Artist.getArtists((err, artists) => {
			var opts = {
				path: 'musics album genre picture labels',
				select: '_id title url'
			}
			Artist.populate(artists, opts, (err, artists) => {
				if(err){ 
					throw err;
				}
				res.json(artists);
			})
		}, 5)
	})
	.post((req, res) => {
		var artist = req.body;
		Artist.addArtist(artist, (err, artist) => {
			if(err){throw err;}
			res.json(artist);
		});
	});

app.route('/api/artists/:_id')
	.get((req, res) => {
		Artist.getArtist(req.params._id, (err, artist) => {
			if(err){throw err;}
			res.json(artist);
		});
	})
	.put((req, res) => {
		var id = req.params._id;
		var artist = req.body;
		Artist.updateArtist(id, artist, {}, (err, artist) => {
			if(err){throw err;}
			res.json(artist);
		});
	})
	.delete((req, res) => {
		var id = req.params._id;
		Artist.removeArtist(id, (err, artist) => {
			if(err){throw err;}
			res.json(artist);
		});
	});

app.get('/api/auth/facebook', 
	passport.authenticate('facebook', {
		authType: 'rerequest',
		scope: ['public_profile', 'id', 'name', 'age', 'age_range', 'gender', 'profile_pic', 'picture', 'user_photos', 'user_friends', 'friends'] 
	})
);

app.get('/api/auth/facebook/callback', 
	passport.authenticate('facebook', {
		successRedirect: '/',
		failureRedirect: '/foo' 
	}), function(req, res) {
		// Successful authentication, redirect home
		res.json(req.user);
		res.redirect('/');
	});


// Music.methods(['get', 'post', 'put', 'delete']);
Music.route('most_downloadable.get', (req, res) => {
	var limit = req.query.limit || 5;
	var sort = req.query.sort || -1;

	Music
	.find({})
	.sort({"download_count": sort})
	.limit(limit)
	.exec(function(err, musics) {
		if(err){
			throw err;
		}
		res.json(musics);
	});
});

// Music.register(app, '/api/musics');
app.get('/api/musics', (req, res) => {
	Music
	.find({})
	.limit(5)
	.exec((err, musics) => {
		var opts = {
			path: 'artist album genre',
			select: 'stage_name _id '
		}
		Music.populate(musics, opts, (err, musics) => {
			if(err){
				throw err;
			}
			res.json(musics);
		})
	})
});

app.get('/api/musics/latests', (req, res) => {
	Music
	.find({})
	.limit(5)
	.sort('-created_date')
	.exec((err, musics) => {
		var opts = {
			path: 'artist album genre',
			select: 'stage_name _id '
		}
		Music.populate(musics, opts, (err, musics) => {
			if(err){
				throw err;
			}
			res.json(musics);
		})
	})
});

app.get('/api/musics/:title', (req, res) => {
	Music.find({title: new RegExp(req.params.title)}, (err, music) => {
		if(err){
			throw err;
		}
		res.json(music);
	});
});

app.get('/api/musics/:_id', (req, res) => {
	Music.getMusicById(req.params._id, (err, music) => {
		if(err){
			throw err;
		}
		res.json(music);
	});
});

app.post('/api/musics', (req, res) => {
	var music = req.body;
	console.log(music)
	// Music.addMusic(music, (err, music) => {
	// 	if(err){
	// 		throw err;
	// 	}
	// 	// Artist
	// 	// Artist.find({stage_name: music})
	// 	// Album
	// 	// Album.
	// 	// Album art
	// 	// Image.
	// 	res.json(music);
	// });
});

app.put('/api/musics/:_id', (req, res) => {
	var id = req.params._id;
	var music = req.body;

	Music.updateMusic(id, music, {}, (err, music) => {
		if(err){
			throw err;
		}
		res.json(music);
	});
});

app.delete('/api/musics/:_id', (req, res) => {
	var id = req.params._id;
	Music.removeMusic(id, (err, music) => {
		if(err){
			throw err;
		}
		res.json(music);
	});
});


app.get('/user/:_id', (req, res) => {
    User.getUserById(req.params._id, (err, cn_user) => {
        if(err){
            throw err;
        }
        res.json(cn_user);
    });
});

app.put('/user/:_id', (req, res) => {
    var id = req.params._id;
    var user = req.body;
    User.updateProfile(id, user, {}, function (err, cn_user) {
        if(err){
            throw err;
        }
        res.json(cn_user);
    });
});

app.delete('/user/:_id', (req, res) => {
    var id = req.params._id;
    User.deleteUser(id, (err, cn_user) => {
        if(err){
            throw err;
        }
        res.json(cn_user);
    });
});

app.get('/posts', function (req, res) {
    Post.find({}, function (err, posts) {
        if (err){
            res.send(posts);
        }
        res.json(posts);
    });
});

app.get('/posts', (req, res) => {
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

// Music.methods(['get', 'post', 'put', 'delete']);
// Music.route("/search")
// Music.register(app, "/musics");

app.get("/api/search", function(req, res, next) {
	var query = req.query.q;
	var field = req.query.field;
	var _query = {};
	console.log(field)
	switch (field) {
		case "title":
			_query = {title: new RegExp(query)}
			break;
		case "author":
			_query = {author: new RegExp(query)}
			break;
		case "artist":
			_query = {artist: new RegExp(query)}
			break;
		case "lyric":
			_query = {lyric: new RegExp(query)}
			break;
		default:
			_query = new RegExp(query)
	}
	Music.find(_query, function(error, result) {
		if (error) {}
		res.json(result);
	});
});

app.get("/api/search/recent", function(req, res, next) {
	Music.find({}, function(error, result) {
		if (error) {}
		res.json(result);
	});
});

// Start server
app.listen(7000);
app.use(express.static(path.join(__dirname, './')));
console.log('Running on port 7000...');
