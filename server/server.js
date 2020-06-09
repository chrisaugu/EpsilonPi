// Dependencies
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const restful = require('node-restful');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const dotenv = require('dotenv').config();

app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../client/views')));
app.use('/images', express.static(path.join(__dirname, '../client/assets/img')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

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
	done(null, user.id); // user._id
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
	profileFields: ['id','displayName','birthday','gender','profileUrl','link','emails','photos','profile_pic'],
	enableProof: true
}, function(accessToken, refreshToken, profile, done) {

	console.log(profile);
	// var me = new Photos({
	// 	email: profile.emails[0].value,
	// 	name: profile.displayName
	// });

	// /* save if new */
	// Photos.findOne({ email: me.email }, function(err, u) {
	// 	if(!u) {
	// 		me.save().then(function(newUser) {
	// 			console.log("new user created: " + newUser);
	// 			done(null, newUser);
	// 		}).catch(function(err){
	// 			return done(err);
	// 		});
	// 	} else {
	// 		console.log("user is: " + u);
	// 		done(null, u);
	// 	}
	// });
}));

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Connect to Mongoose
mongoose.connect("mongodb://localhost:27017/epsilonpi")
mongoose.connection.on("connected", function(){
	console.log("Connected: Successfully connect to mongo server");
});
mongoose.connection.on('error', function(){
	console.log("Error: Could not connect to MongoDB. Did you forget to run 'mongod'?");
});
// .then((res) => {
//   console.log("Connected: Successfully connect to mongo server");
// })
// .catch((err) => {
//   console.log("Error: Could not connect to MongoDB. Did you forget to run 'mongod'?");
// });

// Start server
app.listen(7000);
console.log('Running on port 7000...');

let Artist = require('./models/artist');
require('./models/album');
require('./models/genre');
require('./models/music');
require('./models/playlist');
require('./models/image');
require('./models/user');
require('./models/post');

let Album = mongoose.model('Album');
let Image = mongoose.model('Image');
let Music = mongoose.model('Music');
let Genre = mongoose.model('Genre');
let Playlist = mongoose.model('Playlist');
let User = mongoose.model('User');
let Post = mongoose.model('Post');

Artist.methods(['get', 'post', 'put', 'delete']);

// router.route('/artists')
// 	.get((req, res) => {
// 		Artist.getArtists((err, artists) => {
// 			var opts = {
// 				path: 'musics album genre picture labels',
// 				select: '_id title url'
// 			}
// 			Artist.populate(artists, opts, (err, artists) => {
// 				if(err){ 
// 					throw err;
// 				}
// 				res.json(artists);
// 			})
// 		}, 5)
// 	})
// 	.post((req, res) => {
// 		var artist = req.body;
// 		Artist.addArtist(artist, (err, artist) => {
// 			if(err){throw err;}
// 			res.json(artist);
// 		});
// 	});
// router.get('/artists/search', function(req, res){
// 	var query = req.query;
// 	var opts = {};
// 	if (query['stage_name']) {
// 		opts = {stage_name: new RegExp(query, 'i')}
// 	}
// 	else {
// 		opts = {name: new RegExp(query, 'i')}
// 	}
// 	console.log(opts);
// 	Artist.getArtists(opts, 5, function(error, result) {
// 		if (error) throw err;
// 		res.json(result);
// 	});
// });
// router.route('/artists/:_id')
// 	.get((req, res) => {
// 		Artist.getArtist(req.params._id, (err, artist) => {
// 			if(err){throw err;}
// 			res.json(artist);
// 		});
// 	})
// 	.put((req, res) => {
// 		var id = req.params._id;
// 		var artist = req.body;
// 		Artist.updateArtist(id, artist, {}, (err, artist) => {
// 			if(err){throw err;}
// 			res.json(artist);
// 		});
// 	})
// 	.delete((req, res) => {
// 		var id = req.params._id;
// 		Artist.removeArtist(id, (err, artist) => {
// 			if(err){throw err;}
// 			res.json(artist);
// 		});
// 	});

Artist.register(router, '/artists');

router.get('/auth/facebook',
	passport.authenticate('facebook', {
		authType: 'rerequest',
		scope: ['public_profile', 'id', 'name', 'age', 'age_range', 'gender', 'profile_pic', 'picture', 'user_photos', 'user_friends', 'friends'] 
	})
);

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
	successRedirect: '/',
	failureRedirect: '/foo' 
}), function(req, res) {
	// Successful authentication, redirect home
	res.json(req.user);
	res.redirect('/');
});

/**
 * Music routes
 */
Music.methods(['get', 'post', 'put', 'delete']);
// router.get('/musics', (req, res) => {
// 	Music
// 	.find({})
// 	.limit(5)
// 	.exec((err, musics) => {
// 		var opts = {
// 			path: 'artist album genre',
// 			select: 'stage_name _id '
// 		};
// 		Music.populate(musics, opts, (err, musics) => {
// 			if(err){
// 				throw err;
// 			}
// 			res.json(musics);
// 		})
// 	})
// });
//
// router.post('/musics', (req, res) => {
// 	var music = req.body;
// 	console.log(music)
// 	// Music.addMusic(music, (err, music) => {
// 	// 	if(err){
// 	// 		throw err;
// 	// 	}
// 	// 	// Artist
// 	// 	// Artist.find({stage_name: music})
// 	// 	// Album
// 	// 	// Album.
// 	// 	// Album art
// 	// 	// Image.
// 	// 	res.json(music);
// 	// });
// });
//
// router.get('/musics/:_id', (req, res) => {
// 	Music.getMusicById(req.params._id, (err, music) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(music);
// 	});
// });
//
// router.put('/musics/:_id', (req, res) => {
// 	var id = req.params._id;
// 	var music = req.body;
//
// 	Music.updateMusic(id, music, {}, (err, music) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(music);
// 	});
// });
//
// router.delete('/musics/:_id', (req, res) => {
// 	var id = req.params._id;
// 	Music.removeMusic(id, (err, music) => {
// 		if(err){
// 			throw new Error(err);
// 		}
// 		res.json(music);
// 	});
// });

// router.get('/musics/:title', (req, res) => {
// 	Music.find({title: new RegExp(req.params.title)}, (err, music) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(music);
// 	});
// });

Music.route('latests.get', (req, res) => {
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
Music.route('most_downloaded.get', (req, res) => {
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

Music.register(router, '/musics');


/**
 * Playlist routes
 */
Playlist.methods(['get', /*'post', 'put',*/ 'delete']);
// Playlist.route('playlists.get', (req, res) => {
// 	var limit = req.query.limit || 5;
// 	var sort = req.query.sort || -1;

// 	Music
// 	.find({})
// 	.sort({"download_count": sort})
// 	.limit(limit)
// 	.exec(function(err, musics) {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(musics);
// 	});
// });

// router.get('/playlists', function(req, res) {
//     Playlist.find({}, function (err, songs) {
//         if (err){
//             throw new Error(err);
//         }
//         res.json({data: songs});
//     });
// });

Playlist.route('playlists.post', function(req, res) {
	let playlistName = req.body.name;
	let songs = req.body.songs;
	let userId = 1;/*req.session.user.id;*/

	var playlist = new Playlist({
		name: playlistName,
		// ownerId: userId,
		songs: songs
	});
	playlist.save(function(err, newPlaylist){
		if (err) {
			throw new Error(err);
		}
		res.status(200).json(newPlaylist);
	});
});

Playlist.route('playlists.put', function(req, res) {
	let name = req.body.name;
	let songs = req.body.songs;
	let userId = 1;/*req.session.user.id;*/

	Playlist.update({
		name: name,
		// ownerId: userId,
		songs: songs
	}, {upsert: true}, function(err, newPlaylist){
		if (err) {
			throw new Error(err);
		}
		res.status(200).json(newPlaylist);
	});
});

Playlist.register(router, '/playlists');

/**
 * User routes
 */
router.route('/users')
	.get(function (req, res) {
		User.find({}, function (err, users) {
			if (err){
				throw new Error(er);
			}
			res.json(users);
		});
	})
	.post(function (req, res) {
		var newUser = new User({
			name: req.body.name,
			bio: req.body.bio,
			picture: req.body.picture,
			search_token: req.body.name
		})
		newUser.save(function (error, result) {
			if (error) throw new Error(error);
			res.send(result);
		})
	})

router.get('/users/:_id', (req, res) => {
	User.getUserById(req.params._id, (err, cn_user) => {
		if(err){
			throw err;
        }
        res.json(cn_user);
    });
});

router.route('/users/:_id/playlists')
	.get(function(req, res) {
		var userId = req.param._id;
	    Playlist.find({
	    	ownerId: userId
	    }, function (err, songs) {
	        if (err){
	            throw new Error(err);
	        }
	        res.json(songs);
	    });
	})
	.post(function(req, res) {
		var userId = req.param._id;
	    Playlist.find({
	    	ownerId: userId
	    }, function (err, songs) {
	        if (err){
	            throw new Error(err);
	        }
	        res.json(songs);
	    });
	});

router.route("/users/:_id/playlists/:playlistId")
	.put(function(req, res) {
		const playlistId = req.param.playlistId;
	    Playlist.findOneAndUpdate({
	    	id: playlistId,
	    	ownerId: req.param._id
	    }, function (err, songs) {
	        if (err){
	            throw new Error(err);
	        }
	        res.json(songs);
	    });
	})
	// .delete(playlistId)

router.put('/users/:_id', (req, res) => {
    var id = req.params._id;
    var user = req.body;
    User.updateProfile(id, user, {}, function (err, cn_user) {
        if(err){
            throw err;
        }
        res.json(cn_user);
    });
});

// router.delete(playlistId);

// Music.methods(['get', 'post', 'put', 'delete']);
// Music.route("/search")
// Music.register(app, "/musics");

router.get("/search", function(req, res, next) {
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

router.get("/search/recent", function(req, res, next) {
	Music.find({}, function(error, result) {
		if (error) {}
		res.json(result);
	});
});

Genre.methods(['get', 'post', 'put', 'delete']).register(router, '/genres');

// var d = require("\/Users\/Wantok\/WebstormProjects\/crisbot\/lib\/randomWords\/letterFrequency.csv");
// console.log(d);


router.get("/se", function (req, res) {
  console.log("eeel");
});
