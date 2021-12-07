$(document).ready(function(){
	// $(document).on("mobileinit", function() {
	// 	firstURL = $.mobile.path.parseUrl(window.location.href);
	// 	cache_localStorage && cache_localStorage_clean();
	// });

	// $(document).ready(function() {
	$('.topten a').tooltip();
	$(".nav li").removeClass("active");
	$("[href='"+ document.location.hash +"']").click(function() {
		this.parent().addClass("active");
	});
	$("a").each(function(i, el) {
		if (el.hash == location.hash) {
			window.selected = true
		}
	});

	$('input.autocomplete').autocomplete({
		data: {
			"Apple": null,
			"Microsoft": null,
			'Google': "https://placehold.it/250x250"
		},
		sortFunction: function(a, b, inputString) {
			return a.indexOf(inputString) - b.indexOf(inputString);
		},
		onAutocomplete: function(dataItem){
			console.log(dataItem)
		}
	});
	// });

	$('select').formSelect();
	$('.sidenav').sidenav();
	$('.parallax').parallax();

	function activate_nav(x){
		$(".nav li").removeClass("active");
		$(x).parent().addClass("active");
	}

	function bytesToSize(b,c){var g=0;if(0==b)return"n/a";for(;1024<=b;)g++,b/=1024;return b.toFixed(c)+" "+["Bytes","KB","MB","GB","TB"][g]}
	function formatBytes(b,c){if(0==b)return"No";var g=c+1||1,f=Math.floor(Math.log(b)/Math.log(1E3));return parseFloat((b/Math.pow(1E3,f)).toFixed(g))+" K M G T P E Z Y".split(" ")[f]}

	function generateUid() {
		function s4() {
			return Math.floor(( 1 + Math.random() ) * 0x10000).toString(16).substring(1);
		}

		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}

	function capitalize(word) {
		return word.charAt(0).toUpperCase() + word.substr(1);
	}

	function capitalizeAll(string) {
		var words = string.trim().split(" ");

		for (var i = 0; i < words.length; i++) {
			words[i] = capitalize(words[i]);
		}

		return words.join(" ");
	}

	function isObjectEmpty(obj) {
		var prop;

		for (prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				return false;
			}
		}

		return true;
	}

	function matchObject(sourceObj, objToMatch) {
		var obj = {},
			key;

		if (typeof sourceObj === "object" && sourceObj !== null && typeof objToMatch === "object" && objToMatch !== null) {
			for (key in objToMatch) {
				if (objToMatch.hasOwnProperty(key)) {
					if (typeof sourceObj[key] !== "undefined") {
						obj[key] = sourceObj[key];
					}
				}
			}
		}

		return obj;
	}

	function sizeToString(bytes) {
		var size, unit,
			sizeString;

		bytes = parseInt(bytes);

		if (isNaN(bytes)) {
			sizeString = "";
		}
		else if (bytes < 100) {
			size = bytes;
			unit = "B";
		}
		else if (bytes < 100 * 1024) {
			size = bytes / 1024;
			unit = "KB";
		}
		else if (bytes < 100 * 1024 * 1024) {
			size = bytes / ( 1024 * 1024 );
			unit = "MB";
		}
		else {
			size = bytes / ( 1024 * 1024 * 1024 );
			unit = "GB";
		}

		if (typeof size !== "undefined") {
			// round to 1 decimal point
			size = Math.round(size * 10) / 10;

			sizeString = size + unit;
		}

		return sizeString;
	}

	function isValidDate(year, month, day) {
		var date,
			months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
			monthIndex,
			isValid = true;

		year = parseInt(year);

		monthIndex = months.indexOf(month);
		if (monthIndex != -1) {
			month = monthIndex;
		}
		month = parseInt(month);

		day = parseInt(day);

		if (isNaN(year) || isNaN(month) || isNaN(day)) {
			isValid = false;
		}
		else {
			date = new Date(year, month, day);

			if (date.getFullYear() != year) {
				isValid = false;
			}
			else if (date.getMonth() != month) {
				isValid = false;
			}
			else if (date.getDate() != day) {
				isValid = false;
			}
		}

		return isValid;
	}

	function getWordByCount(word, count) {
		var result = "";

		if (count === 0) {
			result = "No " + word + "s";
		}
		else if (count == 1) {
			result = "1 " + word;
		}
		else {
			result = count + " " + word + "s";
		}

		return result;
	}

	function randomInRange(from, to) {
		return from + Math.floor(Math.random() * ( to - from + 1 ));
	}
	function getRandomInRange( n1, n2 ) {
		return n1 + Math.floor( Math.random() * ( n2 - n1 + 1 ) );
	}

	function gifInFavorite ( userData, id ) {
		var isFavorite = false;

		if ( userData && userData.indexOf( id ) !== -1 ) {
			isFavorite = true;
		}

		return isFavorite;
	}

	var Utils = {
		generateUid: generateUid,
		capitalize: capitalize,
		capitalizeAll: capitalizeAll,
		isObjectEmpty: isObjectEmpty,
		matchObject: matchObject,
		sizeToString: sizeToString,
		isValidDate: isValidDate,
		getWordByCount: getWordByCount,
		randomInRange: randomInRange,
		getRandomInRange: getRandomInRange,
		gifInFavorite: gifInFavorite,
		formatBytes: formatBytes,
		bytesToSize: bytesToSize
	};

	for (let util in Utils) {
		window[util] = Utils[util];
	}
});

/**
 * MediaPlayer main class
 * @class MediaPlayer
 */
function MediaPLayer(mediaSrc, mediaType) {
	if (!MediaPLayer.instance_) {
		this.instance_ = this;
	}
	this._type = mediaType;
	this._parent = MediaPLayer.prototype;
	this._options = {
		mediaplayerName: 'CJFA_MediaPlayer',
		mediaplayerClass: 'mediaplayer',
		nextLabel: 'Next &rarr',
		prevButton: '&larr Prev',
		/** Show controll buttons */
		showButtons: true,
	}
	this.media = document.createElement(this.type.toString());
	this.media.id = this._options.mediaplayerName;
	this.media.src = mediaSrc;
	this.media.className = this._options.mediaplayerClass + this.type;
	this.media.setAttribute("autoplay", "auto");
	this.media.setAttribute("name", "media");
	this.media.setAttribute("controls", "");
	this.media.autoplay = !!0;
	this.media.accesskey = "f";
	this.media.buffered = "";
	this.media.contextmenu = self._onContextmenu;
	$(document).on("contextmenu", this, function(i) {
		i.preventDefault(),
		i.stopPropagation(),
		self._onContextmenu()
	})
	this.media.loop = !!0;
	this.media.lang = window.navigator.language.toString();
	this.media.muted = !!0;
	this.media.oncanplay = self._onCanplay;
	this.media.oncuechange = self._onCuechange;
	this.media.ondurationchange = self._onDurationchange;
	this.media.onended = self._onEnded;
	this.media.onerror = self._onError;
	this.media.onloadeddata = self._onLoadeddata;
	this.media.onloadedmetadata = self._onLoadedmetadata;
	this.media.onloadstart = self._onLoadstart;
	this.media.onpause = self._onPause;
	this.media.onplay = self._onPlay;
	this.media.onplaying = self._onPlaying;
	this.media.onprogress = self._onProgress;
	this.media.oncanplaythrough = self._onCanplaythrough;
	this.media.onseeked = self._onSeeked;
	this.media.onseeking = self._onSeeking;
	this.media.onvolumechange = self._onVolumehange;
	this.media.onwaiting = self._onWaiting;
	this.media.ontimeupdate = self._onTimeupdate;
	this.media.ontoggle = self._onTimeupdate;
	this.media.played = !!0;
	// this.media.volume = !!0;

	var i = 1;
	var nextSong = '';
	this.setup = function setup() {
		var audioPlayer = document.getElementById('audio');
		audioPlayer.addEventListener('ended', function() {
			i++;
			nextSong = "Music/"+i+".mp3";
			audioPlayer.src = nextSong;
			audioPlayer.load();
			audioPlayer.play();
			if (i == 37) { // this is the end of the song
				i = 1;
			}
		}, false);
	}

};
MediaPLayer.prototype = {
	constructor: MediaPLayer,
	init: function() {
		"complete" == document.readyState && document.getElementById('audio').appendChild(this.media);
		return this;
	},
	play: function() {
		this.media.play();
		return this;
	},
	stop: function() {
		this.media.stop();
		return this;
	},
	pause: function() {
		this.media.pause();
		return this;
	},
	mute: function() {
		"use strict";
		this.muted == true ? 1 : 0;
		return this;
	},
	_onContextmenu: function() {},
	_onCanplay: function(e) {},
	_onCuechange: function(e) {},
	_onDurationchange: function(e) {},
	_onEnded: function(e) {
		"use strict";
		// this.setup
		if (this.onRepeat) {
			// if song is on repeat
			// keep on playing the song
		} else {
			// randomly play another song from playlist
		}
	},
	_onError: function(e) {
		alert("An error occured: " + e);
	},
	_onLoadeddata: function(e) {},
	_onLoadedmetadata: function(e) {},
	_onLoadstart: function(e) {},
	_onPause: function(e) {},
	_onPlay: function(e) {},
	_onPlaying: function(e) {},
	_onProgress: function(e) {},
	_onCanplaythrough: function(e) {},
	_onSeeked: function(e) {},
	_onSeeking: function(e) {},
	_onVolumehange: function(e) {},
	_onWaiting: function(e) {},
	_onTimeupdate: function(e) {
		var curtime = parseInt(song.currentTime, 10);
		tracker.slider('value', curtime);
	},
	_onToggle: function(e) {},
};
// myMusic = new MediaPLayer("./images/AUD-20150101-WA003.mp3", "video");
// myMusic.init().play();

var song = {};
song['volume'] = 0.8;

var volume = $('#volumeBar');
volume.slider({
	range: 'min',
	min: 0,
	max: 100,
	value: 50,
	start: function(event, ui) {
		console.log(song.volume = ui.value / 100)
		song.volume = ui.value / 100;
		$("#volumeSlider").data( 'clicked', true );
	},
	slide: function(event, ui) {
		console.log("slide :" + event);
	},
	stop: function (event, ui) {
		$("#currentVolume").empty().append(ui.value * 2 + "%");
		sendCommand({
			'command': 'volume',
			'val': Math.round(ui.value * 5.12)
		})
		$("#volumeSlider").data( 'clicked', false );
	}
});

var tracker = $('#seekBar');
tracker.slider({
	range: 'min',
	min: 0,
	max: 10,
	start: function(event, ui) {},
	slide: function(event, ui) {
		song['currentTime'] = ui.value;
	},
	stop: function(event, ui) {}
});