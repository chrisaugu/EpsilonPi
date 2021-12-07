angular.module('EpsilonPi').controller('AudioPlayerCtrl', ($scope, $http, Queue, List, Shuffle, AudioPlayer, MusicService) => {
	"use strict";

	var playlist = new List();
	var playqueue = new Queue();

	// var mp3 = this.playqueue.front();
	// this.playqueue.dequeue();

	var shuffled = false;
	$scope.repeating = false;
	$scope.isNowPlaying = false;

	$scope.playerInitialized = true;

	$scope.showPlayer = function() {
		return localStorage.getItem('player_show');
	};

	$scope.$on('audio-player:hide', function(event, data) {
		console.log(data);
		$scope.showPlayer = data;
	});

	$scope.initializePlayer = function() {
		AudioPlayer.init();
		$scope.playerInitialized = true;
		$scope.isPlaying = false;

		// for (var music in MusicService.musics) {
		// 	playqueue.enqueue(MusicService.musics[music]);
		// }
		// 
		// 
		// while (playqueue.dequeue() && !AudioPlayer.isPlaying()) {
			// AudioPlayer.setSrc("/assets/502081975.mp3");
			// console.log(playqueue.front());
			// AudioPlayer.setSrc(playqueue.front());
			// AudioPlayer.play();
			// playqueue.dequeue();
		// }

		// $scope.showDuration = AudioPlayer.audio-player.duration;
		// $scope.showCurrentTime = AudioPlayer.audio-player.showCurrentTime;
		// angular.element(window.document)[0].title = "title";
	};

	$scope.play = function(trackId) {
		if (!this.playerInitialized) {
			AudioPlayer.init();
		}

		AudioPlayer.setCurrentTrack(trackId);
		AudioPlayer.play();
		$scope.isPlaying = true;
	};

	$scope.pause = function() {
		$scope.isPlaying = false;
		AudioPlayer.pause();
	};

	$scope.stop = function() {
		$scope.isPlaying = false;
		AudioPlayer.stop();
	};
	
	$scope.prev = function() {
		// stops the current playing song, retrieve the previous song and play it
		var a = this.queue.back();
		this.play(a);
	};

	$scope.next = function(){
		// if on shuffle mode, shuffle the dataStore and return the front data
		if (this.status.shuffle) {
			this.shuffle(this.queue.dataStore);
		}
		return this.queue.front();
	};

	$scope.showCurrentTime = function() {
		return AudioPlayer.getCurrentTime();
		// var timeHolder = document.querySelector(".audio-player-current-time");
		// timeHolder.innerText = this.getCurrentTime();
	};

	$scope.getDuration = function() {
		return AudioPlayer.getDuration();
	};

	$scope.updateCurrentTime = function(a) {
		var duration = a;
		var min = Math.floor(duration / 60);
		if (min < 10) {
			min = "0" + min;
		}
		var diff = Math.floor(duration % 60);
		if (diff < 10) {
			diff = "0" + diff;
		}
		var _duration = min + ":" + diff;
		return _duration;
	};

	$scope.updateVolume = function(volume) {
		if (volume === undefined) {
			volume = 0
		} else {
			volume /= 100; // convert to percentage
		}
		
		AudioPlayer.setVolume(volume);
	};

	$scope.toggleMute = function() {
		if (!AudioPlayer.getMuteStatus()) {
			AudioPlayer.mute(true);
			$scope.isMute=true;
		} else {
			AudioPlayer.mute(false);
			$scope.isMute=false;
		}
	};

	$scope.toggleShuffle = function(array) {
		$scope.shuffled = true;
	};

	$scope.toggleRepeat = function() {
		if (AudioPlayer.isRepeatEnabled()) {
			AudioPlayer.repeat(false);
			$scope.isRepeat = false;
		} else {
			AudioPlayer.repeat(true);
			$scope.isRepeat = true;
		}
	};

	$scope.desc_size = function(b){
		return b.match(/^.*Size: (.+?) MB/i)[1]
	};
});
