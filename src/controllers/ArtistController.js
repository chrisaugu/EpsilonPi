angular.module('EpsilonPi').controller('ArtistCtrl', ['$scope', '$http', '$location', '$routeParams', 
  function ($scope, $http, $location, $routeParams) {
    console.log('ArtistCtrl loaded...');

    $scope.getArtists = function(){
      $http.get('/api/artists').success(function(response){
        $scope.artists = response;
      });
    }
    
    $scope.getArtist = function(){
      var id = $routeParams.id;
      $http.get('/api/artists/'+id).success(function(response){
        $scope.artist = response;
      });
    }

    $scope.addArtist = function(){
      console.log($scope.artist);
      $http.post('/api/artists/', $scope.artist).success(function(response){
        window.location.href='#/artists';
      });
    }

    $scope.updateArtist = function(){
      var id = $routeParams.id;
      $http.put('/api/artists/'+id, $scope.artist).success(function(response){
        window.location.href='#/artists';
      });
    }

    $scope.removeArtist = function(id){
      $http.delete('/api/artists/'+id).success(function(response){
        window.location.href='#/artists';
      });
    }
  }
]);