angular.module('EpsilonPi')
.controller('ChartsCtrl', function($scope, $rootScope, $location, API, $http) {
  
  $scope.getChartLists = function() {
  	$http.get('/api/musics').success(function (data) {
    	$scope.musics = data;
  	});
  };

});