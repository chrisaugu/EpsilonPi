angular.module('EpsilonPi')
.controller('PlaylistController', ["$scope", '$window', '$http', '$location', '$routeParams', "List", "Tracks", "Playlist", "API", 
	function PlaylistController($scope, $window, $http, $location, $routeParams, List, Tracks, Playlist, API) {

		$scope.playlists = new List();
		$scope.playlist = [];
		$scope.hasPlaylist = false;
		$scope.hasTracks = false;
		$scope.track = false;

		window.p = $scope.playlists;
	
		$scope.getPlaylist = function() {
			API.getPlaylistById($routeParams.id, {}).then(res => {
				$scope.playlist = res.data;
			});
		};
		$scope.getPlaylists = function() {
			API.getPlaylists().then(res => {
				if (Array.isArray(res.data)) $scope.hasPlaylist = true;
				// console.log(...res.data);
				// for (var i = 0; i < res.data.length; i++) {
				// 	var data = res.data[i];
				angular.forEach(res.data, function(data) {
					var p = new Playlist(data._id, data.name);

					if (Array.isArray(data.songs) && data.songs.length != 0) {
						$scope.hasTracks = true;
						$scope.track = true;
						for (var i = 0; i < data.songs.length; i++) {
							$scope.playlists.tracks.push(new Tracks(data['songs'][i]._id,
																	data['songs'][i].name, 
																	data['songs'][i].artists, 
																	data['songs'][i].album_art, 
																	data['songs'][i].url));
						}
					};
					$scope.playlists.append(p);
				});
				// console.log($scope.playlists.find($routeParams.id))
			}).catch(err => {
				throw new Error(err);
			});
		};
		$scope.playlistsModal = function(id) {
			console.log("id");
			addToPlaylist(id, element);
		};
		$scope.addToPlaylist = function(trackId, element) {
			console.log("trackId")
			// var p = new Playlist(id, element['name']);

			// for (var i = 0; i < element['songs'].length; i++) {
			// 	$scope.playlists.tracks.push(new Tracks(element['songs'][i]._id,
			// 											element['songs'][i].title, 
			// 											element['songs'][i].artists, 
			// 											element['songs'][i].album_art, 
			// 											element['songs'][i].url));
			// };
			// $scope.playlists.append(p);
			// 	AudioPlayer.addToPlaylist();
		};
		$scope.removeTrackFromPlaylist = function(element) {
			var i = $scope.playlists.find(element);
			$scope.playlists[i].remove(element);
		};
		$scope.deletePlaylist = function(playlistId) {
			console.log("trackId")
			// API.deletePlaylist(playlistId);
		};
		// $scope.playNext = function() {
		// 	$scope.playlists.next();
		// };
		// $scope.hasPlaylist = function() {
		// 	console.log($scope.playlists.length())
		// 	return $scope.playlists.length() > 0;
		// };
		$scope.createNewPlaylist = function(){
			$scope.$parent.$parent['showModal'] = true;
			// $scope.showModal = !$scope.showModal;
			var newPlaylist = $window.prompt("Create new playlist");
			console.log("creating playlists... " + newPlaylist);
			this.savePlaylist(newPlaylist);
		};
		$scope.savePlaylist = function(name) {
			var options = {
				name: name ? name : "",
				songs: []
			};
			API.savePlaylist(options).then(res => {
				// console.log(res.data._id);
				// res.status === 200 && this.getPlaylists();
				if (res.status == 200 && res.statusText == "OK") {
					$location.path(`/playlists/details/${res.data._id}`);
				}
			}).catch(err => {
				throw new Error(err);
			});
			// var playlist = new Playlist(options.name, new Tracks(options.songs));
			// $scope.playlists.save();
		};
	}
]);