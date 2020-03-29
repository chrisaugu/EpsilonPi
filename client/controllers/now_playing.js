angular.module('EpsilonPi')
.controller('NowPlayingCtrl', function($scope, $rootScope, $location, API, $http) {
  $scope.playerInitialized = false;

  $rootScope.$broadcast('audio-player:hide', true);

  var mediaId = $location.path().split('/').pop();

  API.getMediaById(mediaId).success(function(media) {
    $scope.hasLiked = media.user_has_liked;
    $scope.photo = media;
  });

  $scope.like = function() {
    $scope.hasLiked = true;
    API.likeMedia(mediaId).error(function(data) {
      sweetAlert('Error', data.message, 'error');
    });
  };

  $http.get('/api/').success(function (data) {
    $scope.likesCounter = data.likes;

    $scope.toogleLike = function (item) {
      item.like = !item.like;
    }
  });

  $scope.likesCounter = 0;

  $scope.inc = function() {
    $scope.likesCounter++;
  };
  $scope.evil = function() {
    $scope.likesCounter--;
    if ($scope.likesCounter == 0) {
      $scope.likesCounter = 0;
    }
    try {
      eval('1+2');
    } catch (e) {
      $scope.evilError = e.message;
    }
  };
});