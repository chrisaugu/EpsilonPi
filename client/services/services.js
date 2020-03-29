angular.module("EpsilonPi" )

.service('MusicService', function($q, $http, API){
	var self = this;
	this.getMusics = function(e) {
		return hello;
	};
	this.getPlaylists = function() {
		return API.getUserPlaylists().then(function (response) {
			return response;
		});
	};
    this.fetch = function() {
        $scope.code = null;
        $scope.response = null;

        $http({ method: $scope.method, url: $scope.url/*, cache: $templateCache*/ })
        .then(function(response) {
            $scope.status = response.status;
            $scope.data = response.data;
        }, function(response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
        });
    };

	// API.savePlaylist({});
	return {
		musics: ["/assets/502081975.mp3", 'Bad Liar.mp3', 'Sunrise.mp3']
	}
})

.service('Votes', function ($q) {
	var self = this;
	this.fetch = function() {
		if (this.votes) return $q.when(this.votes);
		return {
			hello: 'hello'
		}
	}
})

.factory("Auth", [function($resource, $cookies){
	return {
		setCreds: function(un, pw) {
			var token = un.concat(":", pw);
			$cookies.blogCreds = token;
			$cookies.blogUsername = un;
		},
		dd: function(un, pw) {
			var token = un.concat(":", pw);
			$cookies.blogCreds = token;
			$cookies.blogUsername = un;
		},
		checkCreds: function(un, pw) {
			var returnVal = false;
			var token = un.concat(":", pw);
			var blogCreds = $cookies.blogCreds;
			if (blogCreds !== undefined && blogCreds !== "") {
				returnVal = true;
			}
			return returnVal;
		},
		Login: function() {
			return $resource("http://localhost:7000/api/login", {}, {
				login: {method: 'POST', cache: false, isArray: false}
			});
		}
	}
}])

.factory('ping', ['$http', function($http) {
	return function ping() {
		return $http.send('/ping');
	};
}])

//Transforming object to array with a filter
.filter('object2Array', function () {
    return function (input) {
        var out = [];
        for (i in input) {
            out.push(input[i]);
        }
        return out;
    }
})

.filter('humanTime', function () {
    return function (input) {
        function pad(d) {
            return (d < 10) ? '0' + d.toString() : d.toString();
        }

        var min = (input / 1000 / 60) << 0,
            sec = Math.round((input / 1000) % 60);

        return pad(min) + ':' + pad(sec);
    };
})

// angular.module('project', ['ngRoute', 'firebase'])

// .value('fbURL', 'https://ng-projects-list.firebaseio.com/')
// .service('fbRef', function(fbURL) {
//     return new Firebase(fbURL)
// })
// .service('fbAuth', function($q, $firebase, $firebaseAuth, fbRef) {
//     var auth;
//     return function () {
//         if (auth) return $q.when(auth);
//         var authObj = $firebaseAuth(fbRef);
//         if (authObj.$getAuth()) {
//             return $q.when(auth = authObj.$getAuth());
//         }
//         var deferred = $q.defer();
//         authObj.$authAnonymously().then(function(authData) {
//             auth = authData;
//             deferred.resolve(authData);
//         });
//         return deferred.promise;
//     }
// })

// .service('Projects', function($q, $firebase, fbRef, fbAuth, projectListValue) {
//     var self = this;
//     this.fetch = function () {
//         if (this.projects) return $q.when(this.projects);
//         return fbAuth().then(function(auth) {
//             var deferred = $q.defer();
//             var ref = fbRef.child('projects-fresh/' + auth.auth.uid);
//             var $projects = $firebase(ref);
//             ref.on('value', function(snapshot) {
//                 if (snapshot.val() === null) {
//                     $projects.$set(projectListValue);
//                 }
//                 self.projects = $projects.$asArray();
//                 deferred.resolve(self.projects);
//             });

//             //Remove projects list when no longer needed.
//             ref.onDisconnect().remove();
//             return deferred.promise;
//         });
//     };
// })

.controller('ProjectListController', function(projects) {
    var projectList = this;
    projectList.projects = projects;
})

.controller('NewProjectController', function($location, projects) {
    var editProject = this;
    editProject.save = function() {
        projects.$add(editProject.project).then(function(data) {
            $location.path('/');
        });
    };
})

.controller('EditProjectController',
    function($location, $routeParams, projects) {
        var editProject = this;
        var projectId = $routeParams.projectId,
            projectIndex;

        editProject.projects = projects;
        projectIndex = editProject.projects.$indexFor(projectId);
        editProject.project = editProject.projects[projectIndex];

        editProject.destroy = function() {
            editProject.projects.$remove(editProject.project).then(function(data) {
                $location.path('/');
            });
        };

        editProject.save = function() {
            editProject.projects.$save(editProject.project).then(function(data) {
                $location.path('/');
            });
        };
    });
