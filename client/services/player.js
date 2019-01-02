// angular.module('EpsilonPi')
// .factory('MusicPlayer', [function() {
    "use strict";

    function MusicPlayer(option = false) {
        if (!MusicPlayer.instance_) {
            MusicPlayer.instance_ = this;
        }
        if (!option) {

        }
        this._options = {
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
            showButtons: true,
            musicSrc: "",
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
        }
        this.$el = document.getElementById('player');
        this.player = new Audio();
        this.player.id = this._options.musicplayerName;
        this.player.src = this._options.musicSrc;
        this.player.className = this._options.musicplayerClass;
        this.player.autoplay = !!0;
        this.player.accesskey = "f";
        // this.player.buffered = "";
        this.player.contextmenu = this._onContextMenu;
        this.player.loop = !!0;
        this.player.muted = !!0;
        this.player.oncanplay = this._onCanPlay;
        this.player.oncuechange = this._onCueChange;
        this.player.ondurationchange = this._onDurationChange;
        this.player.onended = this._onEnded;
        this.player.onerror = this._onError;
        this.player.onloadeddata = this._onLoadedData;
        this.player.onloadedmetadata = this._onLoadedMetaData;
        this.player.onloadstart = this._onLoadStart;
        this.player.onpause = this._onPause;
        this.player.onplay = this._onPlay;
        this.player.onplaying = this._onPlaying;
        this.player.onprogress = this._onProgress;
        this.player.oncanplaythrough = this._onCanplayThrough;
        this.player.onseeked = this._onSeeked;
        this.player.onseeking = this._onSeeking
        this.player.onvolumechange = this._onVolumeChange;
        this.player.onwaiting = this._onWaiting;
        this.player.ontimeupdate = this._onUpdateTime;

        this.init(this.$el, this.src);
    };
    MusicPlayer.prototype = {
        constructor: MusicPlayer,
        status: {
            src: '',
            media: {},
            paused: !0,
            playing: 0,
            srcSet: !1,
            duration: 0,
            remaining: 0,
            readyState: 0,
        },
        audioEvents: ["play", "pause", "ended", "volumechange", "loadeddata",
            "loadstart", "timeupdate", "progress",
            "playing", "waiting", "canplay", "canplaythrough",
            "seeking", "seeked", "emptied", "loadedmetadata",
            "error", "suspend", "stalled"
        ],
        init: function(container, src) {
            "use strict";
            // "complete" == document.readyState && container.insertBefore(this.player, container.firstElementChild);
            console.log("Player intialized");
            this.setupInitialState();
            this.initializeControls();
        },
        setupInitialState: function(state) {
            // set the initial state
            // this.setPlayButtonState(this.player.paused);
            var duration = Math.round(this.player.duration * 1000); // in ms
            var currentTime = Math.round(this.player.currentTime * 1000); // in ms
            this.setVolume(this.player.volume);
        },
        play: function() {
            "use strict";
            // play the audio
            try {
                this.player.play();
            } catch (e) {
                throw new Error(e);
            }
        },
        setPlayButtonState: function(state) {
            this.status.playing = true;
        },
        stop: function() {
            "use strict";
        },
        pause: function() {
            "use strict";
            try {
                this.player.pause();
            } catch (e) {
                try {
                    this.pause();
                } catch (e) {
                    throw new Error(e);
                }
                return false;
            }
        },
        mute: function() {
            "use strict";
            this.player.muted == true ? 1 : 0;
            return this;
        },
        unmute: function() {
            "use strict";
            // mute if muted == false and unmute if muted == true
            // this.player.muted == true ? 
        },
        getSrc: function() {
            try {
                return this.player.src;
            } catch (e) {
                try {
                    return this.player.currentSrc;
                } catch (e) {
                    throw new Error(e);
                }
                return false;
            }
        },
        setSrc: function(mediaSrc) {
            "use strict";
            try {
                this.player.src = mediaSrc;
            } catch (e) {
                try {
                    this.player.currentSrc = mediaSrc;
                } catch (e) {
                    throw new Error(e);
                }
                return false;
            }
        },
        setVolume: function(newVolume) {
            // sets the volume of the the audio, unmute if muted
            // console.log("** setting volume to " + newVolume);
            this.player.volume = newVolume;
            this.player.muted = false;
        },
        updateVolume: function() {
            const volume = this.player.volume;
            this.setVolume(volume / 100);
        },
        updateVolumeControls: function() {
            // updates the volume ui control
            var volume = this.player.muted ? 0 : this.player.volume;
            var volumePercentage = Math.round(volume * 100);
            // this.updateMuteButtonState();
            this.$el.value = volumePercentage;
        },
        updateMuteButtonState: function () {
            var volume = this.player.volume;
            if (volume == 0) {
                this;
            } else {
                this;
            }
        },
        getBytes: function () {
            try {
                return this.player.webkitAudioDecodedByteCount;
            } catch (e) {
                return false;
            }
        },
        getSize: function bytesToSize(b, c){
            var g = 0;
            if(0 == b)
                return "n/a";
            for(; 1024 <= b;) 
                g++,
                b /= 1024;
            return b.toFixed(c) + " " + ["Bytes","KB","MB","GB","TB"][g]
        },
        formatBytes: function formatBytes(b, c){
            if(0 == b)
                return "No";
            var g = c + 1 || 1,
                f = Math.floor(Math.log(b) / Math.log(1E3));
            return parseFloat((b / Math.pow(1E3, f)).toFixed(g)) + " K M G T P E Z Y".split(" ")[f]
        },
        hasError: function() {
            return (this.player.error !== null || this.player.networkState == this.player.NETWORK_NO_SOURCE);
        },
        handleEvent: function(aEvent) {
            switch (aEvent.type) {
                case "click":
                case "touchstart":
                case "touchend":
                case "touchup":
                case "mouseover":
                case "mouseenter":
                case "mouseleave":
            }
        },
        // currentTime: this.player.currentTime,
        setCurrentTime: function(e) {
            this.player.currentTime = e;
        },
        getCurrentTime: function() {
            var time = this.player.currentTime;
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
        },
        showCurrentTime: function() {
            var timeHolder = document.querySelector(".player-current-time");
            timeHolder.innerText = this.getCurrentTime();
        },
        getDuration: function() {
            var duration = Math.round(this.player.duration * 1000);
            this.formatTime(duration);
        },
        showDuration: function(duration) {
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
            // this._options.cssSelector.seekBar.durationValue = timeString;

            // this._options.cssSelector.seekBar.max = duration;
            var seekBar = document.getElementById("seekBar");
            seekBar.max = duration;
            // XXX Can't set increment here, due to bug 473103. Also, doing so causes
            // snapping when dragging with the mouse, so we can't just set a value for
            // the arrow-keys.
            // this._options.cssSelector.seekBar.pageIncrement = Math.round(duration / 10);
            seekBar.pageIncrement = Math.round(duration / 10);
        },
        seekToPosition(newPosition) {
            newPosition /= 1000; // convert from ms
            // this.log("+++ seeking to " + newPosition);
            this.player.currentTime = newPosition;
        },
        showPosition: function(currentTime, duration) {
            // If the duration is unknown (because the server didn't provide
            // it, or the audio is a stream), then we want to fudge the duration
            // by using the maximum playback position that's been seen.
            if (currentTime > this.maxCurrentTimeSeen) {
              this.maxCurrentTimeSeen = currentTime;
            }
            this.showDuration(duration);

            // this.log("time update @ " + currentTime + "ms of " + duration + "ms");

            let positionTime = this.formatTime(currentTime, this.showHours);

            // this._options.cssSelector.seekBar.value = currentTime;
            var seekBar = document.getElementById("seekBar");
            seekBar.value = currentTime;
            // this.positionDurationBox.position = positionTime;
            this.updateSeekbarProgress();
        },
        updateSeekbarProgress: function() {
        },
        formatTime(aTime, showHours = false) {
            // var duration = this.player.duration;
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
        },
        initializeControls: function() {
            var controls = {
                volumeBar: document.getElementById("volumeBar"),
                seekBar: document.getElementById("seekBar"),
                playButton: document.getElementById("playButton"),
                pauseButton: document.getElementById("pauseButton"),
                stopButton: document.getElementById("stopButton"),
                shuffleButton: document.getElementById("shuffleButton"),
                downloadButton: document.getElementById("downloadButton")
            };
            this._controls = controls;
        },
        _onContextMenu: function() {
            "use strict";
            return false;
        },
        _onCanPlay: function(e) {},
        _onCueChange: function(e) {},
        _onDurationChange: function(e) {
            console.log("Duration change")
            // this.setCurrentTime(e);
        },
        _onEnded: function(e) {
            "use strict";
            console.log("Ended")
            MusicPlayer.instance_.setPlayButtonState(true);
            MusicPlayer.instance_.showPosition(Math.round(this.currentTime * 1000));
            // automatically play next song on the cue
        },
        _onError: function(e) {
            "use strict";
            throw new Error(e);
        },
        _onLoadedData: function(e) {
            "use strict";
            console.log("Data loaded")
            this._state = "loaded";
            // this.player.readyState == 4 ?  this.init() : this; 
            // initializes the player, enable buttons
        },
        _onLoadedMetaData: function(e) {
            console.log("Metadata loaded")
            // prepares, enable buttons
        },
        _onLoadStart: function(e) {},
        _onPause: function(e) {
            "use strict";
            console.log("Pause")
            MusicPlayer.instance_.setPlayButtonState(true);
            // sets state to pause, pause the audio
        },
        _onPlay: function(e) {
            console.log("Play")
            MusicPlayer.instance_.setPlayButtonState(false);
            // do something when audio starts playing
        },
        _onPlaying: function(e) {
            console.log("Playing")
            // updates currentTime, duration, etc
        },
        _onProgress: function(e) {
            console.log("Progress")
            // update
        },
        _onCanPlayThrough: function(e) {},
        _onSeeked: function(e) {
            console.log("Seeked")
            // sets currentTime, progress position, 
        },
        _onSeeking: function(e) {
            console.log("Seeking");
            // set updateTime
        },
        _onVolumeChange: function(e) {
            console.log("Volume change")
            // MusicPlayer.instance_.updateVolumeControls();
        },
        _onWaiting: function(e) {
            console.log("Waiting")
        },
        _onUpdateTime: function(e) {
            console.log("Update time")
            // sets currentTime
            var currentTime = Math.round(this.currentTime * 1000); // in ms
            var duration = Math.round(this.duration * 1000); // in ms
            MusicPlayer.instance_.showPosition(currentTime, duration);
        },
        _onToggle: function(e) {},
    };

    // return MusicPlayer;
// }]);