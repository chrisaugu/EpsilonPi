'use strict';
angular.module('EpsilonPi')
	.directive("tabs", function() {
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			controller: function($scope, $element) {
				var panes = $scope.panes = [];

				$scope.select = function(pane) {
					angular.forEach(panes, function(pane) {
						pane.selected = false;
					});
					pane.selected = true;
				};

				this.addPane = function(pane) {
					if (panes.length === 0) $scope.select(pane);
					panes.push(pane);
				}
			},
			template:
				'<div class="tabbable">' +
				'<ul class="nav nav-tabs nav-justified">' +
				'<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
				'<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
				'</li>' +
				'</ul>' +
				'<div class="tab-content" ng-transclude></div>' +
				'</div>',
			replace: true
		};
	})
	.directive('pane', function() {
		return {
			require: '^tabs',
			restrict: 'E',
			transclude: true,
			scope: { title: '@' },
			link: function(scope, element, attrs, tabsController) {
				tabsController.addPane(scope);
			},
			template:
				'<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
				'</div>',
			replace: true
		};
	})
	.directive("footerTemplate", function () {
		return {
			restrict: 'E',
			replace: true,
			scope: true,
			templateUrl: "../views/footer.html",
			controllerAs: "FooterController"
		};
	})
	.directive(
		"headerTemplate", function () {
			return {
				restrict: "E",
				replace: true,
				scope: true,
				templateUrl: "../views/navbar.html",
				controllerAs: "HeaderController"
			}
		}
	)
	.directive('navbarTemplate', function() {
		return {
			restrict: 'E',
			transclude: true,
			scope: true,
			controllerAs: "HeaderController",
			templateUrl: '../views/navbar.html',
			replace: true
		};
	})
	.directive(
		"recentSearchTemplate", [function () {
			return {
				restrict: "E",
				replace: true,
				templateUrl: "../views/recent_search.html",
				scope: true,
				controller: "SearchController"
			}
		}]
	)
	.directive(
		"mostDownloadableTemplate", [function () {
			return {
				restrict: "E",
				templateUrl: "../views/most_downloadable.html",
				replace: true,
				transclude: true,
				scope: true,
				controller: "MostDownloadable"
			}
		}]
	)
	.directive("avatar", function(){
		// <ul class="collection">
		//   <avatar title="list.title" name="list.name" image="list.image" ng-repeat="list in lists"></avatar>
		// </ul>
		return {
			restrict: 'AE',
			scope: {title: '@', name: '@', image: '@'},
			template: '<li class="collection-item avatar" >' +
				'<img ng-src="/assets/images/{{image}}.jpg" class="circle">' +
				'<span class="title">{{title}}</span>' +
				'<p>First line</br>' +
				'Second line' +
				'</p>' +
				'<a href="#/" class="secondary-content">{{name}}</a>' +
				'</li>',
			controller: function() {
				console.log("ell")
			}
		}
	})
	.directive("userPlaylistTemplate", [function(){
		return {
			restrict: 'E',
			templateUrl: "../views/playlist.html",
			replace: true,
			transclude: true,
			scope: {},
			controller: "PlaylistController"
		}
	}])
	.directive('sidenavTemplate', function() {
		return {
			restrict: 'E',
			templateUrl: "../views/sidenav.html",
			scope: false,
			replace: true,
			controller: "SidenavController"
		};
	})
	.directive('sidebarTemplate', function() {
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: "../views/sidebar.html",
			scope: true,
			controller: "SidebarController"
		};
	})
	.directive("loadingInline", function(){
		return {
			restrict: "E",
			replace: true,
			template: '<div class="preloader-wrapper big active">' +
				'<div class="spinner-layer spinner-blue-only">' +
				'<div class="circle-clipper left">' +
				'<div class="circle"></div>' +
				'</div>' +
				'<div class="gap-patch">' +
				'<div class="circle"></div>' +
				'</div>' +
				'<div class="circle-clipper right">' +
				'<div class="circle"></div>' +
				'</div>' +
				'</div>' +
				'</div>',
			link: function ( $scope, $element, attrs ) {
				$element.addClass( "loading-screen" );
			}
		};
	})
	.directive('suggestPanel', function(){
		return {
			restrict: 'E',
			transclude: false,
			replace: true,
			scope: true,
			template: "<div class=\"\" ng-repeat=\"artist in artists\">"+
				"<span>{{artist}}</span></div>",
			// controller: "SuggestionController"
		};
	})
	.directive('musicPlayer', ['$filter', 'AudioPlayer',
		function($filter, AudioPlayer) {
			return {
				restrict: 'E',
				replace: true,
				templateUrl: "../views/player.html",
				link: function(scope, element, attrs) {
					// init and load track
					console.log("Initializing AudioPlayer");
					AudioPlayer.init();
					scope.$on('track:progress', function(event, data) {
						scope.$apply(function() {
							scope.progress = data;
						});
					});
					scope.$on('track:id', function(event, data) {
						scope.$apply(function() {
							scope.currentPlaying = AudioPlayer.currentTrackData();
						});
					});
					scope.$on('currentTrack:position', function(event, data) {
						scope.$apply(function() {
							scope.currentPostion = $filter('humanTime')(data);
						});
					});
					scope.$on('currentTrack:duration', function(event, data) {
						scope.$apply(function() {
							scope.currentDuration = $filter('humanTime')(data);
						});
					});
					scope.isPlaying = false;
					scope.$on('music:isPlaying', function(event, data) {
						scope.$apply(function() {
							scope.isPlaying = data;
						});
					});
					// scope.playlist = AudioPlayer.getPlaylist(); //on load
					scope.$on('audio-player:playlist', function(event, data) {
						scope.$apply(function() {
							scope.playlist = data;
						});
					});
					scope.$on('audio-player:show', function(event, data) {
						console.log(data)
						scope.$apply(function(){
							scope.showPlayer = data;
						});
					})
				},
				controller: "AudioPlayerCtrl"
			}
		}
	])
	.directive("allowDrag", ["$rootScope", "$timeout", function($rootScope, $timeout) {
		return {
			restrict: "A",
			link: function($scope, $element, attrs) {

				$element.on('dragover', function(event) {
					event.preventDefault();
				});

				$element.on('drop', function(event) {
					var regex = /([a-zA-A0-9\s()_-]*)\.(mp3|wav|ogg)/g;
					var author = /(\w*\_(\-)?\w*)/g;
					var title = /(\w*\_(\-)?\w*)/g;
					var artist, filename, temp;
					event.preventDefault();
					// move dragged elem to the selected drop target
					var files = event.originalEvent.dataTransfer.files;
					// remove _
					if (files[0].name.search(/\_/i)) {
						temp = files[0].name.split(/\_/i);
						artist = temp[0].split('-')[0];
					}
					// reparate title from artist
					if (temp[2].search(/\./)) {
						title = temp[2].split('.')[0];
					}
					$scope.title = title;
					$scope.artist = artist;

					// var ex1 = "Flo_Rida_-_Sweet_Sensation.mp3";
					// var ex2 = "Chris Brown - Back To Sleep(320).mp3";

					if ($(this).val()) {
						console.log(this.files)
						if (this.files && this.files[0]) {
							var m = new FileReader();
							m.addEventListener("load", function(l) {
								var N = l.target.result;
								$("#audio-player").attr("src", N).attr("controls", true);
								// $scope.music = {
								//   image_file: l.target.result
								// }
							});
							m.readAsDataURL(this.files[0])
						}
					}

					// $rootScope.inExtension = true;
				});

			},
			controller: "MusicCtrl"
		}
	}])
	.directive('uploadMusic', function(){
		return {
			restrict: 'EA',
			replace: true,
			scope: true,
			link: function($scope, $element){
				$element.on('change', function(e){
					var self = this;
					if ($(this).val()) {
						console.log(this.files)
						if (this.files && this.files[0]) {
							var m = new FileReader();
							m.addEventListener("load", function(l) {
								console
								var N = l.target.result;
								$("#audio-player").attr("src", N).attr("controls", true);
								// $scope.music = {
								//   image_file: l.target.result
								// }
							});
							m.readAsDataURL(this.files[0])
						}
					}
				})

			},
			template: '<input type="file" id="music" class="form-control" ng-change="change()" ng-model="music_file" placeholder="Music">'
		}
	})
	.directive('headerWithCoverArt', [function() {
		return {
			restrict: 'E',
			scope: true,
			replace: true,
			// templateUrl: "",
			// controller: ""
		}
	}])
	.directive('isActive', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs, $location) {
				// if (attrs.isActive === '' || element.href === location.hash) {
				if (location.hash == element[0].lastElementChild.hash) {
					element.className = "active";
				}
			}
		}
	})
	.directive('appNotification', function() {
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			template: ' <div class="alert alert-{{type}}" role="alert">{{message}}</div>',
			// controller: "notifier"
		}
	})
	.directive('playAll', ['AudioPlayer', '$log',
		function(AudioPlayer, $log) {
			return {
				restrict: "EA",
				scope: {
					songs: '=playAll'
				},
				replace: true,
				template: '<button id="playButton" class="btn btn-small btn-round btn-dark-red play-btn audio-player-play" *ng-hide="isPlaying" ng-click="play();">▶ play all</button>',
				link: function(scope, element, attrs) {
					element.bind('click', function(event) {
						// first clear the playlist
						AudioPlayer.clearPlaylist(function(data) {
							$log.debug('cleared, ok now add to playlist');
							// add songs to playlist
							for (var i = 0; i < scope.songs.length; i++) {
								AudioPlayer.addTrack(scope.songs[i]);
							}

							if (attrs.play != 'false') {
								//play first song
								AudioPlayer.play();
							}
						});
					});
				}
			}
		}
	])
	.directive('playButton', ['AudioPlayer', '$log',
		function(AudioPlayer, $log) {
			return {
				restrict: "EA",
				replace: true,
				template: '<button id="playButton" class="btn btn-small btn-round btn-dark-red play-btn audio-player-play">▶</button>',
				link: function(scope, element, attrs) {
					element.bind('click', function(event) {
						AudioPlayer.play();
					});
				}
			}
		}])
	.directive('pauseButton', function(AudioPlayer){
		return {
			restrict: 'AE',
			scope: true,
			replace: true,
			template: '<button id="pauseButton" class="btn btn-small btn-round btn-dark-red play-btn audio-player-pause">⏸</button>',
			link: function (scope, elm, attrs) {
				elm.bind('click', function(event){
					AudioPlayer.pause();
				});
			},
			controllerAs: 'MusicCtrl'
		}
	})
	.directive('stopButton', function(AudioPlayer){
		return {
			restrict: 'AE',
			scope: true,
			replace: true,
			template: '<button id="stopButton" class="btn btn-small btn-round btn-dark-red play-btn audio-player-stop" ng-disabled="!isPlaying">⏹</button>',
			link: function (scope, elm, attrs) {
				elm.bind('click', function(event){
					AudioPlayer.stop();
				});
			},
			controllerAs: 'MusicCtrl'
		}
	})
	.directive('nextButton', function(AudioPlayer) {
		return {
			restrict: 'AE',
			replace: true,
			template: '<button class="btn btn-small btn-round btn-dark-red play-btn audio-player-next">⏭</button>',
			link: function (scope, elm, attrs) {
				elm.bind('click', function(event) {
					AudioPlayer.playTrack(scope.song._id);
					AudioPlayer.setSrc(attrs.musicSrc);
				});
			}
		}
	})
	.directive('prevButton', function(AudioPlayer){
		return {
			restrict: 'AE',
			replace: true,
			template: '<button class="btn btn-small btn-round btn-dark-red play-btn audio-player-prev">⏮</button>',
			link: function (scope, elm, attrs) {
				elm.bind('click', function(event) {
					AudioPlayer.prevTrack();
				});
			}
		}
	})
	.directive('addToQueueButton', function(AudioPlayer){
		return {
			restrict:'AE',
			scope: true,
			replace: true,
			// bindToController: false,
			template: '<button class="btn btn-small btn-round" *ngif="!isQueued()" (click)="queue()" title="Add to Queue">\n' +
				'<i class="fa fa-plus"></i> Add to queue\n' +
				'</button>',
			link: function(scope, elm, attrs) {
				scope.title = attrs.title;
				elm.bind('click', function() {
					AudioPlayer.addToQueue();
					console.log(attrs.musicSrc);
				});
			},
			controllerAs: 'QueueController'
		}
	})
	.directive('addToPlaylistButton', function(AudioPlayer, $log) {
		return {
			restrict: 'AE',
			scope: {
				song: "=addSong"
			},
			replace: true,
			template: '<button class="btn btn-small btn-round" title="Add to Playlist"><i class="fa fa-plus"></i> Add to playlist</button>',
			// link: function(scope, elem, attrs) {
			// 	var addToPlaylist = function() {
			// 		var trackId = AudioPlayer.addTrack(scope.song);
			// 		//if request to play the track
			// 		if(attrs.musicPlayer === 'play') {
			// 			AudioPlayer.playTrack(trackId);
			// 		}
			// 	};
			// 	elem.bind('click', function() {
			// 		$log.debug('adding song to playlist');
			// 		addToPlaylist();
			// 	});
			// },
			controllerAs: 'PlaylistController'
		};
	})
	.directive('deletePlaylistButton', function(){
		return {
			restrict: 'AE',
			scope: true,
			replace: true,
			template: '<button class="inline floatr"><i class="fa fa-download"></i>delete</button>',
			controllerAs: 'PlaylistController'
		}
	})
	.directive('downloadButton', function(){
		return {
			restrict: 'AE',
			scope: true,
			replace: true,
			template: '<button id="play" class="btn btn-round btn-dark-red play-btn" download><i class="fa fa-download"></i>Download</button>',
			link: function (scope, elm, attrs) {
				console.log(attrs.musicsrc);
			}
		}
	})
	.directive('musicVolume', function(AudioPlayer){
		return {
			restrict: 'AE',
			link: function (scope, element, attrs) {
				element.bind('click', function(event){
					switch (attrs.type) {
						case "maxVolume":
							AudioPlayer.updateVolume(true);
							break;
						case "minVolume":
							AudioPlayer.updateVolume(false);
							break;
					}
				});

				// scope.volume = AudioPlayer.getVolume();
				// scope.$on('music:volume', function(event, data) {
				// 	scope.$apply(function() {
				// 		scope.volume = data;
				// 	});
				// });

				// scope.$on('music:muted', function(event, data) {
				// 	scope.$apply(function() {
				// 		if (data) {
				// 			scope.isMuted = true;
				// 			scope.muteState = '🔇 mute';
				// 			scope.type = 'mute';
				// 		} else {
				// 			scope.isMuted = true;
				// 			scope.muteState = '🔈 unmute';
				// 			scope.type = 'unmute';
				// 		}
				// 	});
				// });
			}
		}
	})
	.directive('modal', function () {
		return {
			restrict: 'E',
			transclude: true,
			replace: true,
			scope: {},
			template: '<div class="modal fade">' +
				'<div class="modal-dialog">' +
				'<div class="modal-content">' +
				'<div class="modal-header">' +
				'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
				'<h4 class="modal-title">{{ title }}</h4>' +
				'</div>' +
				'<div class="modal-body" ng-transclude></div>' +
				'</div>' +
				'</div>' +
				'</div>',
			link: function($scope, $element, $attrs) {
				$scope.title = $attrs.title;

				$scope.$watch($attrs.visible, function(value){
					if(value == true)
						$($element).modal('show');
					else
						$($element).modal('hide');
				});

				$($element).on('shown.bs.modal', function(){
					$scope.$apply(function(){
						$scope.$parent[$attrs.visible] = true;
					});
				});

				$($element).on('hidden.bs.modal', function(){
					$scope.$apply(function(){
						// $scope.showModal = false;
						$scope.$parent[$attrs.visible] = false;
					});
				});
			}
		};
	})
	.directive('modalButton', function(){
		return {
			// require: '?modal',
			restrict: 'E',
			transclude: true,
			replace: true,
			scope: true,
			template: `<button ng-click="toggleModal()" class="btn btn-default btn-round">Open modal</button>`,
			controller: function($scope, $element, $attrs){
				$scope.toggleModal = function(){
					console.log($scope)
					// $scope.$$nextSibling.showModal = !$scope.$$nextSibling.showModal;
				};
			}
		}
	})
