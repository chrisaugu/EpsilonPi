const express = require('express');
const http = require("http");
const bodyParser = require('body-parser');
const restful = require('node-restful');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const formidable = require('formidable');
const dotenv = require('dotenv').config();

const app = express();
const router = express.Router();
const server = http.createServer(app);

app.set('port', (process.env.PORT || 7000));
// app.use(express.static(path.join(__dirname, '../client')));
// app.use(express.static(path.join(__dirname, '../client/views')));
// app.use('/images', express.static(path.join(__dirname, '../client/assets/img')));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

server.listen(app.get('port'));
server.on("listening", () => {
	console.log("Server running on port %s", app.get('port'));
});
server.on("error", error => {
	throw new Error(`Error occurred: ${error.message}`);
});

// Creating an instance for MongoDB
// mongoose.connect("mongodb+srv://chrisaugu:secr3t@sweetlipsdb.mongodb.net/epsilonpi", {
mongoose.connect("mongodb://localhost:27017/epsilonpi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.connection.on("connected", function(){
	console.log("Connected: Successfully connect to mongo server");
});
mongoose.connection.on('error', function(){
	console.log("Error: Could not connect to MongoDB. Did you forget to run 'mongod'?");
});

// app.use(session({
// 	key: 'user_sid',
// 	secret: 'monkey',
// 	resave: false,
// 	saveUninitialized: false,
// 	cookie: { maxAge: 2 * 7 * 24 * 60 * 60 * 1000, expires: 600000 }
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// /** Registers a function used to serialize user objects into the session. */
// passport.serializeUser((user, done) => {
// 	console.log(user);
// 	done(null, user.id); // user._id
// });
// /** Registers a function used to deserialize user objects out of the session. */
// passport.deserializeUser((id, done) => {
// 	Photos.findById(id).then((user) => {
// 		done(null, user);
// 	});
// });

// passport.use(new FacebookStrategy({
// 	clientID: "1791165357568831", // process.env.FACEBOOK_APP_ID,
// 	clientSecret: "70b43373323e9c92705ecec5b1189f78", // process.env.FACEBOOK_APP_SECRET,
// 	callbackURL: "/user", // process.env.CALLBACK_URL,
// 	profileFields: ['id','displayName','birthday','gender','profileUrl','link','emails','photos','profile_pic'],
// 	enableProof: true
// }, function(accessToken, refreshToken, profile, done) {

// 	console.log(profile);
// 	// var me = new Photos({
// 	// 	email: profile.emails[0].value,
// 	// 	name: profile.displayName
// 	// });

// 	// /* save if new */
// 	// Photos.findOne({ email: me.email }, function(err, u) {
// 	// 	if(!u) {
// 	// 		me.save().then(function(newUser) {
// 	// 			console.log("new user created: " + newUser);
// 	// 			done(null, newUser);
// 	// 		}).catch(function(err){
// 	// 			return done(err);
// 	// 		});
// 	// 	} else {
// 	// 		console.log("user is: " + u);
// 	// 		done(null, u);
// 	// 	}
// 	// });
// }));

let Artist = require('./models/artist');
let Album = require('./models/album');
let Genre = require('./models/genre');
let Track = require('./models/track');
let Playlist = require('./models/playlist');
let Image = require('./models/image');
let User = require('./models/user');
let Post = require('./models/post');

app.use('/api', router);

router.route('/artists')
	.get((req, res) => {
		Artist.getArtists((err, artists) => {
			var opts = {
				path: 'musics album genre picture labels',
				select: '_id title url'
			}
			Artist.populate(artists, opts, (err, artists) => {
				if (err) { 
					throw err;
				}
				res.json(artists);
			})
		}, 5)
	})
	.post((req, res) => {
		var artist = req.body;
		Artist.addArtist(artist, (err, artist) => {
			if (err) {throw err;}
			res.json(artist);
		});
	});

router.route('/artists/:_id')
	.get((req, res) => {
		Artist.getArtist(req.params._id, (err, artist) => {
			if (err) {throw err;}
			res.json(artist);
		});
	})
	.put((req, res) => {
		var id = req.params._id;
		var artist = req.body;
		Artist.updateArtist(id, artist, {}, (err, artist) => {
			if (err) {throw err;}
			res.json(artist);
		});
	})
	.delete((req, res) => {
		var id = req.params._id;
		Artist.removeArtist(id, (err, artist) => {
			if (err) {throw err;}
			res.json(artist);
		});
	});

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
	// res.redirect('/');
});

/**
 * Track routes
 */
router.route("/tracks")
.get((req, res) => {
	let { limit, sort } = req.query;

	Track
	.find({})
	.limit(2)
	.exec((err, musics) => {
		// var opts = {
		// 	path: 'artist album genre',
		// 	select: 'stage_name _id '
		// };
		// Track.populate(musics, opts, (err, musics) => {
		// 	if (err) {
		// 		throw err;
		// 	}
		// 	res.json(musics);
		// })
		res.json(musics);
	})
})
.post((req, res) => {
	var music = req.body;
	console.log(music)
	// Track.addTrack(music, (err, music) => {
	// 	if (err) {
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

router.route('/tracks/:id')
.get((req, res) => {
	Track.getTrackById(req.params.id, (err, music) => {
		if (err) {
			throw err;
		}
		console.log(music)
		res.json(music);
	});
})
.put((req, res) => {
	var id = req.params.id;
	var music = req.body;

	Track.updateTrack(id, music, {}, (err, music) => {
		if (err) {
			throw err;
		}
		res.json(music);
	});
})
.delete((req, res) => {
	var id = req.params.id;
	Track.removeTrack(id, (err, music) => {
		if (err) {
			throw new Error(err);
		}
		res.json(music);
	});
});

router.get('/tracks/:title', (req, res) => {
	Track.find({title: new RegExp(req.params.title)}, (err, music) => {
		if (err) {
			throw err;
		}
		res.json(music);
	});
});

// Track.route('latests.get', (req, res) => {
// 	Track
// 		.find({})
// 		.limit(5)
// 		.sort('-created_date')
// 		.exec((err, musics) => {
// 			var opts = {
// 				path: 'artist album genre',
// 				select: 'stage_name _id '
// 			}
// 			Track.populate(musics, opts, (err, musics) => {
// 				if (err) {
// 					throw err;
// 				}
// 				res.json(musics);
// 			})
// 		})
// });
// Track.route('most_downloaded.get', (req, res) => {
// 	var limit = req.query.limit || 5;
// 	var sort = req.query.sort || -1;

// 	Track
// 		.find({})
// 		.sort({"download_count": sort})
// 		.limit(limit)
// 		.exec(function(err, musics) {
// 			if (err) {
// 				throw err;
// 			}
// 			res.json(musics);
// 		});
// });

/**
 * Playlist routes
 */
// Playlist.route('playlists.get', (req, res) => {
// 	var limit = req.query.limit || 5;
// 	var sort = req.query.sort || -1;

// 	Track
// 	.find({})
// 	.sort({"download_count": sort})
// 	.limit(limit)
// 	.exec(function(err, musics) {
// 		if (err) {
// 			throw err;
// 		}
// 		res.json(musics);
// 	});
// });

router.route("/playlists")
.get(function(req, res) {
	Playlist.find({}, function (err, songs) {
		if (err){
			throw new Error(err);
		}
		res.json({data: songs});
	});
})
.post(function(req, res) {
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
})
.put(function(req, res) {
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

/**
 * User routes
 */
router.route('/users')
	.get(function (req, res) {
		User
		.find({})
		// .desc('dateCreated')
		// .populate('playlists')
		// .where('tags.tagName').in(['funny', 'politics'])
		// .run(function(err, docs){
		//	// docs is always empty
		// })
		.exec(function(err, users) {
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

router.route('/users/:id')
.get((req, res) => {
	User.getUserById(req.params.id, (err, cn_user) => {
		if (err) {
			throw err;
		}
		res.json(cn_user);
	});
})
.put((req, res) => {
	var id = req.params.id;
	var user = req.body;
	User.updateProfile(id, user, {}, function (err, cn_user) {
		if (err) {
			throw err;
		}
		res.json(cn_user);
	});
});

router.route('/users/:id/playlists')
	.get(function(req, res) {
		var userId = req.param.id;
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
		var userId = req.param.id;
		Playlist.find({
			ownerId: userId
		}, function (err, songs) {
			if (err){
				throw new Error(err);
			}
			res.json(songs);
		});
	});

router.route("/users/:id/playlists/:playlistId")
	.put(function(req, res) {
		const playlistId = req.param.playlistId;
		Playlist.findOneAndUpdate({
			id: playlistId,
			ownerId: req.param.id
		}, function (err, songs) {
			if (err){
				throw new Error(err);
			}
			res.json(songs);
		});
	})
	// .delete(playlistId)

// router.delete(playlistId);

router.get("/search", function(req, res, next) {
	var query = req.query.q;
	var field = req.query.field;
	var type = req.query.type;
	var _query = {};
	console.log(field)
	
	var opts = {};
	
	if (query['stage_name']) {
		opts = {stage_name: new RegExp(query, 'i')}
	}
	else {
		opts = {name: new RegExp(query, 'i')}
	}
	
	console.log(opts);

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
	// Artist.getArtists(opts, 5, function(error, result) {
	// 	if (error) throw err;
	// 	res.json(result);
	// });
	
	Track.find(_query, function(error, result) {
		if (error) {}
		res.json(result);
	});
});

router.get("/search/recent", function(req, res, next) {
	Track.find({}, function(error, result) {
		if (error) {}
		res.json(result);
	});
});

router.get("/se", function (req, res) {
  console.log("eeel");
});

router.post('/upload', (req, res, next) => {
	let body = req.body;

	// const form = formidable({ multiples: true, uploadDir: __dirname });
	const form = new formidable.IncomingForm();	
	form.parse(req);

	// file begins uploading
	form.on('fileBegin', function (name, file){
		file.path = __dirname + '/uploads/' + file.name;
	});

	// called when file is uploaded
	form.on('file', function (name, file){
		console.log('Uploaded ' + file.name);
	});

	res.send("uploaded");
});


// add-song
// create-artist
// create-user

// require('./mock_data');