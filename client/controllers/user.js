angular.module('EpsilonPi')
.controller('UserController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
	console.log('UsersController loaded...');

	$scope.getUsers = function(){
		$http.get('/api/users').success(function(response){
			$scope.cn_users = response;
		});
	};

	$scope.getUser = function(){
		var id = $routeParams.id;
		$http.get('/api/users/' + id).success(function(response){
			$scope.cn_user = response;
		});
	};

	$scope.addUser = function(){
		console.log($scope.cn_user);
		$http.post('/api/users/', $scope.cn_user).success(function(response){
			$scope.cn_user = response;
		});
	};

	$scope.updateProfile = function(){
		var id = $routeParams.id;
		$http.put('/api/users/' + id, $scope.cn_user).success(function(response){
			$scope.cn_user = response;
		});
	};

	$scope.deleteUser = function(id){
		$http.delete('/api/users/' + id).success(function(){
			window.location.href = '#/users';
		});
	}
}]);