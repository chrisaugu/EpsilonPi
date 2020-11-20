let Artist = require('./models/artist');
let Album = require('./models/album');
let Genre = require('./models/genre');
let Track = require('./models/track');
let Playlist = require('./models/playlist');
let Image = require('./models/image');
let User = require('./models/user');

User.findOne({name: "Kitten"})
.then(function(user) {

// var user = new User({
//   name: "Kitten",
//   first_name: "Kitten",
//   last_name: "Cat",
//   bio: "meow",
//   picture: "",
//   is_artist: false,
//   search_token: "kitten",
//   // songs: [],
//   // playlists: [playlist],
//   email: "chrisaugu61@gmail.com"
// });

var genre = new Genre({
	name: "Pop",
	img: new Image({
		description: "String",
		url: "String"
	})
});

var album_art = new Image({
	description: "String",
	url: "String"
})

var album = new Album({
	name: "What Dreams Are Made For",
	album_art: album_art,
	genre: [genre],
	// artist: [],
	year: 2020
});


var artistPic = new Image({
	description: "String",
	url: "String"
});

var artist = new Artist({
	name: "Eminem",
	bio: "",
	picture: artistPic,
	tracks: [track],
	albums: [album],
	search_token: "",
	labels: [],
});

album.artist = artist;

var track = new Track({
	title: "Take You Down",
	artist: artist,
	featured_artists: [],
	album: album,
	genre: genre,
	year: 2020,
	duration: "4:11",
	lyrics: "",
	url: "",
	bitrate: "",
	copyright: "",
	quality: "",
	size: ""
});

var cover_art = new Image({
	description: "String",
	url: "String"
});

var playlist = new Playlist({
	name: "When Lyrics Meant Something",
	description: "",
	cover_art: cover_art,
	songs: [track],
	ownerId: user,
	// contributorsId: [{type: Schema.ObjectId, ref: 'User'}],
});

user.playlists.push(playlist);
user.save(function(err, result) {
	if (err) {
		console.error(err);
	}
	else {
		console.log(result);
	}
})

})
.catch(function(error) {
	console.log(error);
});
