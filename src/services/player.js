angular.module('EpsilonPi')
.factory('AudioPlayer', function($rootScope, $log, API) {

	var defaultOptions = {
		musicplayerName: 'CJFA_MusicPlayer',
		musicplayerClass: 'musicplayer',
		playLabel: '▶⏯ play',
		pauseLabel: '⏸ pause',
		stopLabel: '⏹ stop',
		nextLabel: 'Next &rarr',
		prevButton: '&larr Prev',
		shuffleLabel: '🔀 shuffle',
		repeatLabel: '🔁 repeat',
		repeatOneLabel: '🔂 repeat one',
		volumeLabel: 'volume',
		minVolumeLabel: '🔉 min volume',
		maxVolumeLabel: '🔊 max volume',
		muteLabel: '🔇 mute',
		unmuteLabel: '🔈 unmute',
		downloadLabel: 'download',
		/** Show controll buttons */
		cssSelector: {
			playButton: "#playButton",
			pauseButton: "#pauseButton",
			stopButton: "#stopButton",
			nextButton: "#nextButton",
			prevButton: "#prevButton",
			shuffleButton: "#shuffleButton",
			volumeBar: "#volumeBar",
			muteButton: "#muteButton",
			unmuteButton: "#unmuteButton",
			seekBar: "#seekBar"
		}
	};

	var currentTrack = null,
		repeat = false,
		autoPlay = true,
		isPlaying = false,
		volume = 90,
		trackProgress = 0,
		playlist = [],
		player = null,
		$this = null;

	/* 
	 * Initialize Player
	 */
	this.init = function() {
		"use strict";

		$this = this;

		// "complete" == document.readyState && container.insertBefore(audio-player, container.firstElementChild);
		console.log("AudioPlayer intialized");
		localStorage.setItem('player_intialized', true);
		localStorage.setItem('player_show', true);
		$rootScope.$broadcast('audio-player:hide', false);

		player = new Audio();
		player.id = defaultOptions.musicplayerName;
		// audio-player.src = defaultOptions.musicSrc;
		player.className = defaultOptions.musicplayerClass;
		player.loop = !!0;
		player.muted = !!0;
		player.ondurationchange = _onDurationChange;
		player.onended = _onEnded;
		player.onerror = _onError;
		player.onloadeddata = _onLoadedData;
		player.onloadedmetadata = _onLoadedMetaData;
		player.onpause = _onPause;
		player.onplay = _onPlay;
		player.onplaying = _onPlaying;
		player.onprogress = _onProgress;
		player.onseeked = _onSeeked;
		player.onseeking = _onSeeking;
		player.onvolumechange = _onVolumeChange;
		player.onwaiting = _onWaiting;
		player.ontimeupdate = _onUpdateTime;

		// this.events = new Events();
		// this.setupInitialState();
	};

	var status = {
		paused: !0,
		playing: 0,
		waiting: !1,
		mute: 0
	};

	this.setUpInitialState = function(state) {
		// set the initial state
		// this.setPlayButtonState(audio-player.paused);
		var duration = Math.round(player.duration * 1000); // in ms
		var currentTime = Math.round(player.currentTime * 1000); // in ms
		this.setVolume(player.volume);
		this.mute(false);
	};

	this.initPlayTrack = function(trackId, isResume) {
		// audio-player.src !== null & audio-player.currentSrc !== null
		// 
		if (isResume !== true) {
			// stops the audio-player and unloads the track
			player.stop();
			// sets the current track
			this.setCurrentTrack(trackId);
		}
		// play it
		player.play();
		$rootScope.$broadcast('track:id', trackId);
		status.playing = true;
		$rootScope.$broadcast('music:isPlaying', status.playing);
	};

	this.playTrack = function(track) {
		this.initPlayTrack(track);
	};

	this.play = function(){
		var trackToPlay = null;
		// check if track not loaded, else play loaded track
		// if (this.getCurrentTrack() !== null) {
		// 	if (!status.playing) {
		// 		try {
		// 			audio-player.play();
		// 			// status.playing = true;
		// 		} catch (e) {
		// 			throw new Error(e);
		// 		}
		// 	} else {
		// 		this.pause();
		// 	}
		// } else {
		// 	throw new Error("Track not defined.");
		// }
		player.src = '/assets/502081975.mp3';
		player.play();
	};

	this.pause = function(){
		player.pause();
		status.playing = false;
		$rootScope.$broadcast('music:isPlaying', status.playing);
	};

	this.stop = function(){
		player.pause();
		// reset audio-player
		// audio-player.stop();
		status.playing = false;
		$rootScope.$broadcast('music:isPlaying', status.playing);
	};

	this.setCurrentTrack = function(track) {
		currentTrack = track;
		player.src = JSON.parse(API.getMusicById(track)).url;
		player.load();
	};

	this.getCurrentTrack = function() {
		return currentTrack;
	};

	this.currentTrackData = function() {
		var trackId = this.getCurrentTrack();
		var currentKey = this.isInArray(playlist, trackId);
		return playlist[currentKey];
	};

	this.getMuteStatus = function() {
		return status.mute;
	}

	this.mute = function(mute){
		if (mute) {
			player.muted = 1;
			status.mute = true;
		} else {
			player.muted = 0;
			status.mute = false;
		}
		$rootScope.$broadcast('music:muted', status.mute);
	};

	this.getVolume = function() {
		return player.volume;
	};

	this.setVolume = function(newVolume) {
		// sets the volume of the the audio, unmute if muted
		console.log("** setting volume to " + newVolume + " **");
		player.volume = newVolume;
		if (newVolume === 0) this.mute(true);
	};

	this.updateVolume = function() {
		const volume = player.volume;
		this.setVolume(volume / 100);
	};

	this.updateVolumeControls = function() {
		// updates the volume ui control
		var volume = player.muted ? 0 : player.volume;
		var volumePercentage = Math.round(volume * 100);
		this.$el.value = volumePercentage;
	};

	this.getBytes = function () {
		try {
			return player.webkitAudioDecodedByteCount;
		} catch (e) {
			return false;
		}
	};

	this.getSize = function bytesToSize(b, c){
		var g = 0;
		if(0 == b)
			return "n/a";
		for(; 1024 <= b;) 
			g++,
			b /= 1024;
		return b.toFixed(c) + " " + ["Bytes","KB","MB","GB","TB"][g]
	};

	this.formatBytes = function formatBytes(b, c){
		if(0 == b)
			return "No";
		var g = c + 1 || 1,
			f = Math.floor(Math.log(b) / Math.log(1E3));
		return parseFloat((b / Math.pow(1E3, f)).toFixed(g)) + " K M G T P E Z Y".split(" ")[f]
	};

	this.formatTime = function(aTime, showHours = false) {
		// var duration = audio-player.duration;
		// var mins = Math.floor(duration / 60);
		// if (mins < 10) {
		//   mins = "0" + mins;
		// }
		// var diff = Math.floor(duration % 60);
		// if (diff < 10) {
		//   diff = "0" + diff;
		// }
		// var _duration = mins + ":" + diff;
		// return _duration;

		// Format the duration as "h:mm:ss" or "m:ss"
		aTime = Math.round(aTime / 1000);
		let hours = Math.floor(aTime / 3600);
		let mins  = Math.floor((aTime % 3600) / 60);
		let secs  = Math.floor(aTime % 60);
		let timeString;
		if (secs < 10) {
			secs = "0" + secs;
		}
		if (hours || showHours) {
			if (mins < 10) {
				mins = "0" + mins;
			}
			timeString = hours + ":" + mins + ":" + secs;
		} else {
			timeString = mins + ":" + secs;
		}
		return timeString;
	};

	this.hasError = function() {
		return (player.error !== null || player.networkState == player.NETWORK_NO_SOURCE);
	};

	this.handleEvent = function(aEvent) {
		switch (aEvent.type) {
			case "click":
			case "touchstart":
			case "touchend":
			case "touchup":
			case "mouseover":
			case "mouseenter":
			case "mouseleave":
			default:
			// click
		}
	};

	// this.currentTime: audio-player.currentTime,
	this.setCurrentTime = function(e) {
		player.currentTime = e;
	};

	this.getCurrentTime = function() {
		var time = player.currentTime;
		var min = Math.floor(time / 60);
		if (min < 10) {
		  min = "0" + min;
		}
		var diff = Math.floor(time % 60);
		if (diff < 10) {
		  diff = "0" + diff;
		}
		var _time = min + ":" + diff;
		return _time;
	};

	this.getDuration = function() {
		var duration = Math.round(player.duration * 1000);
		this.formatTime(duration);
	};

	this.showDuration = function(duration) {
		let isInfinite = (duration == Infinity);
		// this.log("Duration is " + duration + "ms.\n");

		if (isNaN(duration) || isInfinite) {
		  duration = this.maxCurrentTimeSeen;
		}

		// If the duration is over an hour, thumb should show h:mm:ss instead of mm:ss
		this.showHours = (duration >= 3600000);

		// Format the duration as "h:mm:ss" or "m:ss"
		let timeString = isInfinite ? "" : this.formatTime(duration);
		// this.positionDurationBox.duration = timeString;

		if (this.showHours) {
		  this.positionDurationBox.modifier = "long";
		  this.durationSpan.modifier = "long";
		}

		// "durationValue" property is used by scale binding to
		// generate accessible name.
		// this.defaultOptions.cssSelector.seekBar.durationValue = timeString;

		// this.defaultOptions.cssSelector.seekBar.max = duration;
		var seekBar = document.getElementById("seekBar");
		seekBar.max = duration;
		// XXX Can't set increment here, due to bug 473103. Also, doing so causes
		// snapping when dragging with the mouse, so we can't just set a value for
		// the arrow-keys.
		// this.defaultOptions.cssSelector.seekBar.pageIncrement = Math.round(duration / 10);
		seekBar.pageIncrement = Math.round(duration / 10);
	};

	this.seekToPosition = function(newPosition) {
		newPosition /= 1000; // convert from ms
		// this.log("+++ seeking to " + newPosition);
		player.currentTime = newPosition;
	};

	this.showPosition = function(currentTime, duration) {
		// If the duration is unknown (because the server didn't provide
		// it, or the audio is a stream), then we want to fudge the duration
		// by using the maximum playback position that's been seen.
		if (currentTime > this.maxCurrentTimeSeen) {
		  this.maxCurrentTimeSeen = currentTime;
		}
		this.showDuration(duration);

		// this.log("time update @ " + currentTime + "ms of " + duration + "ms");

		let positionTime = this.formatTime(currentTime, this.showHours);

		// this.defaultOptions.cssSelector.seekBar.value = currentTime;
		var seekBar = document.getElementById("seekBar");
		seekBar.value = currentTime;
		// document.getElementById("seekBar").value = (currentTime / duration) * 100;
		// this.positionDurationBox.position = positionTime;
		this.updateSeekbarProgress();
	};

	this.updateSeekbarProgress = function() {
		// var _bufferProgress = function(audio) {
		//   var bufferedTime = (audio.buffered.end(0) * 100) / audio.duration;
		//   var progressBuffer = _elements.progressBar.children[0].children[0].children[0];

		//   progressBuffer.style.width = bufferedTime + "%";
		// };
	};

	this.showCurrentTime = function() {
		var timeHolder = document.querySelector(".audio-player-current-time");
		timeHolder.innerText = this.getCurrentTime();
	};

	this.buffered = function () {
		if($this.isSet() && $this.player.buffered.length) {
			return Math.floor($this.player.buffered.end($this.player.buffered.length - 1));
		} else {
			return 0;
		}
	};

	this.isRepeatEnabled = function() {
		return player.loop;
	};

	this.repeat = function(state) {
		return (state == true) ? (player.loop=1) : (player.loop=0);
	};

	var _onDurationChange = function(e) {
		// this.events.publish('durationchange', e);
		console.log("Duration change")
		// this.setCurrentTime(e);
	},
	_onEnded = function(e) {
		// this.events.publish('ended', e);
		console.log("Ended");
		$this.setPlayButtonState(true);
		$this.showPosition(Math.round($this.currentTime * 1000));
		// automatically play next song on the queue
		$this.next();
	},
	_onError = function(e) {
		// throw new Error("Music fail to play ");

    	switch (e.target.error.code) {
			case e.target.error.MEDIA_ERR_ABORTED:
				alert('You aborted the video playback.');
				break;
			case e.target.error.MEDIA_ERR_NETWORK:
				alert('A network error caused the audio download to fail.');
				break;
			case e.target.error.MEDIA_ERR_DECODE:
				alert('The audio playback was aborted due to a corruption problem or because the video used features your browser did not support.');
				break;
			case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
				alert('The video audio not be loaded, either because the server or network failed or because the format is not supported.');
				break;
			default:
				alert('An unknown error occurred.');
				break;
    	}
	},
	_onLoadedData = function(e) {
		console.log("Data loaded");
		$this.state = "loaded";
		$this.state['trackLoaded'] = true;
		$this.player.readyState == 4 ?  $this.init() : this; 
		// initializes the audio-player, enable buttons
		$rootScope.$broadcast('audio-player:loadeddata', playlist);
	},
	_onLoadedMetaData = function(e) {
		console.log("Metadata loaded")
		// prepares, enable buttons
	},
	_onPause = function(e) {
		console.log("Pause");
		status.paused = 1;
		$rootScope.$broadcast('music:isPlaying', status.paused);
		// sets state to pause, pause the audio
	},
	_onPlay = function(e) {
		console.log("Play");
		// $this.setPlayButtonState(false);
		// do something when audio starts playing
	},
	_onPlaying = function(e) {
		console.log("Playing");
		status.playing = true;
		$rootScope.$broadcast('music:isPlaying', status.playing);
		// updates currentTime, duration, etc
	},
	_onProgress = function(e) {
		// $this.events.publish('progress', e);
		console.log("Progress")
		// update
		// var currentTime = parseFloat($this.audio-player.currentTime);
		// var duration = parseFloat($this.audio-player.duration);
		// var indicatorLocation = 0;
		// var progressBarWidth = parseFloat(_elements.progressBar.offsetWidth);
		// var progressIndicatorWidth = parseFloat(_progressBarIndicator.offsetWidth);
		// var progressBarIndicatorWidth = progressBarWidth - progressIndicatorWidth;

		// indicatorLocation = progressBarIndicatorWidth * (currentTime / duration);

		// _progressBarIndicator.style.left = indicatorLocation + "px";
	},
	_onSeeked = function(e) {
		// $this.events.publish('seeked', e);
		console.log("Seeked")
		// sets currentTime, progress position, 
	},
	_onSeeking = function(e) {
		// $this.events.publish('seeking', e);
		console.log("Seeking");
		// set updateTime
	},
	_onVolumeChange = function(e) {
		console.log("Volume change")
		$rootScope.$broadcast('audio-player:volumechange', e);
		// $this.updateVolumeControls();
	},
	_onWaiting = function(e) {
		// $this.events.publish('waiting', e);
		console.log("Waiting");
	},
	_onUpdateTime = function(e) {
		// $this.events.publish('timeupdated', e);

		console.log("Update time");
		// sets currentTime
		var currentTime = Math.round($this.currentTime * 1000); // in ms
		var duration = Math.round($this.duration * 1000); // in ms
		$this.showPosition(currentTime, duration);
	};

	return this;
});