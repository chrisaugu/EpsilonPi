angular.module('EpsilonPi')
.controller('GenreCtrl', ['$scope', '$http', '$location', '$routeParams', 
  function ($scope, $http, $location, $routeParams) {
  console.log('GenreCtrl loaded...');

  $scope.getGenres = function(){
    $http.get('/api/artists').success(function(response){
      $scope.artists = response;
    });
  }

  $scope.getGenre = function(){
    var id = $routeParams.id;
    $http.get('/api/artists/'+id).success(function(response){
      $scope.artist = response;
    });
  }

  $scope.addGenre = function(){
    console.log($scope.artist);
    $http.post('/api/artists/', $scope.artist).success(function(response){
      window.location.href='#/artists';
    });
  }

  $scope.updateGenre = function(){
    var id = $routeParams.id;
    $http.put('/api/artists/'+id, $scope.artist).success(function(response){
      window.location.href='#/artists';
    });
  }

  $scope.removeGenre = function(id){
    $http.delete('/api/artists/'+id).success(function(response){
      window.location.href='#/artists';
    });
  }
}]);