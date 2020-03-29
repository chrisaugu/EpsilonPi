angular.module('EpsilonPi')
.controller('QueueController', function QueueController($scope, $window, Queue, /*Tracks,*/ API, MusicService) {
	var queue = new Queue();

	function enqueue( handle, data, noOverwrite ) {
		if ( handle ) {
			if ( noOverwrite && this.isQueued( handle ) ) {
				return false;
			}

			queue[handle] = data;
			return true;
		}
		return false;
	}

	function isQueued( handle ) {
		if ( handle ) {
			return queue.hasOwnProperty( handle );
		}
	}

	$scope.playNext = function(element) {
		queue.enqueue(new Tracks(element['title'], element['artists'], element['album_art'], element['url']));
	};

	$scope.playAll = function() {
		var p = new AudioPlayer();
		p.setSrc(queue.dequeue().url);
		p.play();
	};

	$scope.queue = function() {
		console.log("hello")
		// queue.enqueue(new Tracks(element['title'], element['artists'], element['album_art'], element['url']));
	};
    
    $scope.getTracks = function(){
        API.getPlaylistById($routeParams.id, {
        	populate: "songs"
        }).success(function(response){
            $scope.tracks = response;
        });
    };
});