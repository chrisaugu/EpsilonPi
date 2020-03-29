angular.module('EpsilonPi')
.controller('TracksController', function TracksController($scope/*, $http, $location, $routeParams,*/, List, Tracks) {

	var tracksController = new List();

	$scope.getAllTracks = function() {
		return tracksController.toString();
	};
	$scope.getTracks = function(){
		API.getPlaylistById($routeParams.id, {
			populate: "songs"
		}).success(function(response){
			$scope.tracks = response;
		});
	};
    $scope.getTracks = function(){
        $http.get('/api/musics', $routeParams.id).success(function(response){
            $scope.tracks = response;
        });
    };
	$scope.getTrack = function(element) {
		if (tracksController.contains(element)) {
			throw new Error("Element not found");
		}
		var i = tracksController.find(element);
		tracksController.moveTo(i);
		return tracksController.getElement();
	};
	$scope.addToTracks = function(elements) {
		if (Array.isArray(elements)) {
			for (var i = 0; i < elements.length; i++) {
				tracksController.append(elements[i]);
			}
		} else {
			tracksController.append(new Tracks(element));
		}
	};

	console.log('TracksController loaded...');
});