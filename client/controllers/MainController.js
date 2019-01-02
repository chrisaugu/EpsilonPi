angular.module('EpsilonPi')
.controller('MainCtrl', function($scope, $window, $rootScope, $http, $location, API_CONFIG, arrayToSentence, ngDialog) {
	console.log('EpsilonPiController loaded...');

	var isLoggedin = true;

	$scope.isAuthenticated = function() {
		return isLoggedin;
		// return $auth.isAuthenticated();
	};

	$scope.linkInstagram = function() {
		// connect email account with instagram
		$auth.link('instagram')
		.then(function(response) {
			$window.localStorage.currentUser = JSON.stringify(response.data.user);
			$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
		});
	};

	$scope.instagramLogin = function() {
		$auth.authenticate('instagram')
		.then(function(response) {
			$window.localStorage.currentUser = JSON.stringify(response.data.user);
			$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
		})
		.catch(function(response) {
			console.log(response.data);
		});
	};

	$scope.emailLogin = function() {
		$auth.login({ email: $scope.email, password: $scope.password })
		.then(function(response) {
			$window.localStorage.currentUser = JSON.stringify(response.data.user);
			$rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
		})
		.catch(function(response) {
			$scope.errorMessage = {};
			angular.forEach(response.data.message, function(message, field) {
			$scope.loginForm[field].$setValidity('server', false);
			$scope.errorMessage[field] = response.data.message[field];
			});
		});
	};

	$scope.signInWithFb = function() {
		var dialogOptions;
		isLoggedin = true;

		var start = false;
		var fabLoginParams = {
			clientId: API_CONFIG.fbID,
			code: 'code',
			redirectUri: API_CONFIG.appUrl
		};
		// Restangular.setDefaultHeaders({
		// 	'x-key': API_CONFIG.key,
		// 	'x-app-version': API_CONFIG.version
		// });
		// var user = {};
		$http.post(angular.toJson(fabLoginParams))
		$http.get('/api/auth/facebook')
		.then(function resolved(data) {
			console.log("Logging in...")
			isLoggedin = true;
			dialogOptions = {
				template: "views/notifier.html",
				// controller: "LoginCtrl",
				appendClassName: "xsm-ngdialog xuser-profile-dialog login-dialog",
				data: {
					icrop: "icrop"
				}
			};
			ngDialog.open(dialogOptions);
			// return $q.reject('existed')
		},
		function reject(e) {
			dialogOptions = {
				template: "views/notifier.html",
				// controller: "LoginCtrl",
				appendClassName: "login-dialog",
				data: {
					message: e
				}
			};
			ngDialog.open(dialogOptions);
			// return true;
		});
	};

	$scope.showShareDialog = function (icrop) {
		var dialogOptions;

		dialogOptions = {
			template: "views/shareDialog.html",
			controller: "ShareDialogController",
			appendClassName: "sm-ngdialog share-icrop-dialog",
			data: {
				icrop: "icrop"
			}
		};

		ngDialog.open(dialogOptions);
	};

	$scope.arrayToSentence = function(arr, opts) {
		return arrayToSentence.arrayToSentence(arr, opts);
	};

	$scope.openMusicPlayer = function() {
		return true;
	}

});