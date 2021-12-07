angular.module('EpsilonPi').service('Playlist', function ($q, List) {
	function Playlist(id, title/*, tracks*/){
		this.id = id;
		this.title = title;
		this.tracks = new List();
	
		// console.log(...tracks)
	
		// for (var i = 0; i < tracks.length; i++) {
		// 	this.tracks.append(tracks[i]);
		// }
		// this.save = function() {
		// 	var options = {
		// 		title: this.title,
		// 		songs: this.tracks
		// 	};
		// 	API.savePlaylist(options).then(res => {
		// 		// console.log(res);
		// 		// res.status === 200 && this.getPlaylists();
		// 	}).catch(err => {
		// 		throw new Error(err);
		// 	});
		// 	return this;
		// };
	};
	return Playlist;
});