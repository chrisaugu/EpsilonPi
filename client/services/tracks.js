angular.module('EpsilonPi')
.service('Tracks', function ($q) {
	function Tracks(id, title, artists, album_art, url) {
		this.id = id;
		this.title = title;
		this.url = url;
		this.artists = [...artists];
		this.album_art = album_art;
	};
	return Tracks;
});