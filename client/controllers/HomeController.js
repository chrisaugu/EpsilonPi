angular.module('EpsilonPi')
.controller('HomeCtrl', ["$scope", "$rootScope", "$http", "$location", "$routeParams", "API", "arrayToSentence", 
	function($scope, $rootScope, $http, $location, $routeParams, API, arrayToSentence) {
	console.log('HomeCtrl loaded...');

	var picturesRef;
	var comparisonsArray = [];
	var array = [];
	var nComparisons = 0;

	var success = function (data) {
		data.data.children.forEach(function (entry) {
			array.push(entry.name);
		});
	};

	var error = function () {
		// alert("error");
	};

	$http.get('images.json').then(success, error);

	$scope.image1 = 1;

	$scope.getMusics = function(){
		$http.get('/api/musics').success(function(response){
			$scope.musics = response;
		});
	};
	$scope.getLatestMusics = function(){
		$http.get('/api/musics/latests').success(function(response){
			$scope.latests_musics = response;
		});
	};
	$scope.sendMessage = function(){
		console.log($scope.message);
		$http.post('/api/messages/', $scope.chat).success(function(response){
			$scope.chat = response;
		});
	};
	$scope.deleteMessage = function(id){
		$http.delete('/api/messages/' + id).success(function(response){
			window.location.href='#/messages';
		});
	};

	// $scope.refresh = function () {
	//	 setTimeout(function () {

	//		 if (nComparisons < maxComparisons(array.length)) {
	//			 $scope.image1 = array[Math.floor(Math.random() * array.length)];
	//			 var name1 = $scope.image1.substring(0, $scope.image1.length - 4);
	//			 $scope.image2 = array[Math.floor(Math.random() * array.length)];
	//			 var name2 = $scope.image2.substring(0, $scope.image2.length - 4);

	//			 while ($scope.image1 === $scope.image2 || compared(name1, name2)) {
	//				 $scope.image1 = array[Math.floor(Math.random() * array.length)];
	//				 name1 = $scope.image1.substring(0, $scope.image1.length - 4);
	//				 $scope.image2 = array[Math.floor(Math.random() * array.length)];
	//				 name2 = $scope.image2.substring(0, $scope.image2.length - 4);
	//			 }

	//			 $scope.pictures.once("value", function (snapshot) {

	//				 if (!snapshot.hasChild(name1)) {
	//					 $scope.pictures.child(name1).child("name").set(name1);
	//					 $scope.pictures.child(name1).child("value").set(0);
	//					 $scope.pictures.child(name1).child("impressions").set(1);
	//				 } else {
	//					 $scope.pictures.child(name1).child("impressions").set(snapshot.val()[name1].impressions + 1);
	//				 }

	//				 if (!snapshot.hasChild(name2)) {
	//					 $scope.pictures.child(name2).child("name").set(name2);
	//					 $scope.pictures.child(name2).child("value").set(0);
	//					 $scope.pictures.child(name2).child("impressions").set(1);
	//				 } else {
	//					 $scope.pictures.child(name2).child("impressions").set(snapshot.val()[name2].impressions + 1);
	//				 }
	//			 });

	//			 $rootScope.users.once("value", function (snapshot) {
	//				 var id = $rootScope.user.id;
	//				 var technique = $rootScope.technique;
	//				 if (!snapshot.child(id).child(technique).hasChild(name1)) {
	//					 $scope.users.child(id).child(technique).child(name1).child("impressions").set(1);
	//					 $rootScope.users.child(id).child(technique).child(name1).child("value").set(0);

	//				 } else {
	//					 $scope.users.child(id).child(technique).child(name1).child("impressions").set(snapshot.val()["" + id][technique][name1].impressions + 1);

	//				 }

	//				 if (!snapshot.child(id).child(technique).hasChild(name2)) {
	//					 $scope.users.child(id).child(technique).child(name2).child("impressions").set(1);
	//					 $rootScope.users.child(id).child(technique).child(name2).child("value").set(0);
	//				 } else {
	//					 $scope.users.child(id).child(technique).child(name2).child("impressions").set(snapshot.val()["" + id][technique][name2].impressions + 1);

	//				 }
	//			 });

	//		 } else {
	//			 $scope.finished = true;
	//			 if ($rootScope.techniqueId + 1 == techniques.length)
	//				 $rootScope.rankingAvailable = true;
	//		 }
	//		 $scope.$apply();

	//	 }, 100);
	// }
	
	// $scope.refresh();

	// $scope.vote = function (option1, option2) {
	//	 var name1 = option1.substring(0, option1.length - 4);
	//	 var name2 = option2.substring(0, option2.length - 4);

	//	 var id = $rootScope.user.id;
	//	 var technique = $rootScope.technique;


	//	 $scope.pictures.once("value", function (snapshot) {
	//		 $scope.pictures.child(name1).child("value").set(snapshot.val()[name1].value + 1);
	//		 $scope.pictures.child(name1).child("comparisons").child(name2).child($rootScope.user.id).set("+");
	//		 $scope.pictures.child(name2).child("comparisons").child(name1).child($rootScope.user.id).set("-");
	//	 });

	//	 $rootScope.users.once("value", function (snapshot) {
	//		 $rootScope.users.child(id).child(technique).child(name1).child("value").set(snapshot.val()["" + id][technique][name1].value + 1);
	//		 $rootScope.users.child(id).child(technique).child(name1).child("comparisons").child(name2).set("+");
	//		 $rootScope.users.child(id).child(technique).child(name2).child("comparisons").child(name1).set("-");
	//	 });

	//	 $scope.refresh();
	// }
	// $scope.draw = function (option1, option2) {
	//	 var name1 = option1.substring(0, option1.length - 4);
	//	 var name2 = option2.substring(0, option2.length - 4);

	//	 var id = $rootScope.user.id;
	//	 var technique = $rootScope.technique;

	//	 $scope.pictures.child(name1).child("comparisons").child(name2).set("=");
	//	 $scope.pictures.child(name2).child("comparisons").child(name1).set("=");

	//	 $rootScope.users.child(id).child(technique).child(name1).child("comparisons").child(name2).set("=");
	//	 $rootScope.users.child(id).child(technique).child(name2).child("comparisons").child(name1).set("=");

	//	 $scope.refresh();
	// }

	// $scope.goToRanking = function () {
	//	 $location.path("/stats");
	// }

	// function compared(name1, name2) {
	//	 if (name1 === name2)
	//		 return true;
	//	 var namesConcat = name1 + name2,
	//		 namesConcatInverted = name2 + name1;
	//	 if (comparisonsArray.indexOf(namesConcat) === -1 && comparisonsArray.indexOf(namesConcatInverted) === -1) {
	//		 comparisonsArray.push(namesConcat, namesConcatInverted);
	//		 nComparisons += 1;
	//		 return false;
	//	 } else {
	//		 return true;
	//	 }
	// }

	// function maxComparisons(n) {
	//	 return (Math.pow(n, 2) - n) / 2;
	// }

	$scope.next = function () {
		$rootScope.techniqueId += 1;
		$location.path("/description");
	};

	$scope.arrayToSentence = function(arr, opts) {
		return arrayToSentence.arrayToSentence(arr, opts);
	};
}]);
